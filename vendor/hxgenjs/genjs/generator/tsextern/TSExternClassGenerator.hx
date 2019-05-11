package genjs.generator.tsextern;

import haxe.macro.Type;
import haxe.ds.Option;
import haxe.macro.JSGenApi;
import haxe.macro.Type;
import genjs.processor.*;
import haxe.macro.Expr.Error;
import genjs.generator.*;



using haxe.io.Path;
using haxe.macro.TypeTools;
using StringTools;
using genjs.template.CodeTools;
using haxe.macro.Tools;

class TSExternClassGenerator implements IClassGenerator {
	public function new() {}
	public function generate(api:JSGenApi, c:ProcessedClass) {

		function superClassName(c:ClassType) 
			return switch c.superClass {
				case null: null;
				case {t: sc}:
					var sc = ClassProcessor.process(api, sc.toString(), sc.get());
					return sc.id.asAccessName(sc.externType);
			}		
		
		if((c.constructor == null || c.constructor.code == null) && c.fields.length == 0) return None;
		if(c.type.isExtern) return None;
		// Only generate the TS type definition if explicitely marked
		if(!c.generateTSExtern) return None;
		
		var filepath = c.id.asFilePath() + '.d.ts';
		var name = c.type.name;
		
		switch (c.id) {
			case "Type", "Reflect", "haxe.IMap", "js._Boot.HaxeError", "js.Boot", "Std":
				return None;
		}
		
		if (StringTools.startsWith (c.id, "js.")) return None;
		
		var data = {};
		
		var packageName = c.id.split (".").slice (0, -1).join (".");
		
		var imports = new TSExternRequireGenerator().generate(api, filepath.directory(), c.dependencies);
		
		var className = c.id.split (".").pop ();
		var superClassName = null;
		var ignoreSuper = false;

		
		var classStart = ""; // not sued anymore, remove

        // TODO Remove this when the logic below is moved to the Generator class
		var packageDecl = packageName != "" ? "declare namespace " + packageName + " {" : "";

        var body = Generator.generateClassDeclaration(packageName, className,  c.type);
		
        //TODO  Move this to the generator
		var classEnd = (packageDecl != "" ? "\nexport default " + packageName + "." + className : "export default " + className) + ";";
		
        // Hack, remove later.
        packageDecl = '';

		return Some([
			imports,

			packageDecl,
			// require,
			classStart,
			// ctor,
			body,
			classEnd,
		].join('\n\n'));
	}
}

// ---

class ArgsRenderer {
    public static function renderArgs(args:Array<{name:String, opt:Bool, t:Type}>):String {
        // here we handle haxe's crazy argument skipping:
        // we allow trailing optional args, but if there's non-optional
        // args after the optional ones, we consider them non-optional for TS
        var noOptionalUntil = 0;
        var hadOptional = true;
        for (i in 0...args.length) {
            var arg = args[i];
            if (arg.opt) {
                hadOptional = true;
            } else if (hadOptional && !arg.opt) {
                noOptionalUntil = i;
                hadOptional = false;
            }
        }

        var tsArgs = [];
        for (i in 0...args.length) {
            var arg = args[i];
            var name = if (arg.name != "") arg.name else 'arg$i';
            var opt = if (arg.opt && i > noOptionalUntil) "?" else "";
            tsArgs.push('$name$opt: ${TypeRenderer.renderType(arg.t)}');
        }
        return tsArgs.join(", ");
    }
}



// ---

// ---

class TypeRenderer {
    public static function renderType(t:Type, paren = false):String {
        inline function wrap(s) return if (paren) '($s)' else s;

        return switch (t) {
            case TInst(_.get() => cl, params):
                switch [cl, params] {
                    case [{pack: [], name: "String"}, _]:
                        "string";

                    case [{pack: [], name: "Array"}, [elemT]]:
                        renderType(elemT, true) + "[]";

                    case [{name: name, kind: KTypeParameter(_)}, _]:
                        name;

                    default:
                        // TODO: handle @:expose'd paths
                        haxe.macro.MacroStringTools.toDotPath(cl.pack, cl.name);
                }

            case TAbstract(_.get() => ab, params):
                switch [ab, params] {
                    case [{pack: [], name: "Int" | "Float"}, _]:
                        "number";

                    case [{pack: [], name: "Bool"}, _]:
                        "boolean";

                    case [{pack: [], name: "Void"}, _]:
                        "void";

                    case [{pack: ["haxe", "extern"], name: "EitherType"}, [aT, bT]]:
                        '${renderType(aT, true)} | ${renderType(bT, true)}';

                    default:
                        // TODO: do we want to have a `type Name = Underlying` here maybe?
                        renderType(ab.type.applyTypeParameters(ab.params, params), paren);
                }

            case TAnonymous(_.get() => anon):
                var fields = [];
                for (field in anon.fields) {
                    var opt = if (field.meta.has(":optional")) "?" else "";
                    fields.push('${field.name}$opt: ${renderType(field.type)}');
                }
                '{${fields.join(", ")}}';

            case TType(_.get() => dt, params):
                switch [dt, params] {
                    case [{pack: [], name: "Null"}, [realT]]:
                        // TODO: generate `| null` union unless it comes from an optional field?
                        renderType(realT, paren);

                    default:
                        // TODO: generate TS interface declarations
                        renderType(dt.type.applyTypeParameters(dt.params, params), paren);
                }

            case TFun(args, ret):
                wrap('(${ArgsRenderer.renderArgs(args)}) => ${renderType(ret)}');

            case TDynamic(null):
                'any';

            case TDynamic(elemT):
                '{ [key: string]: ${renderType(elemT)} }';

            default:
                throw 'Cannot render type ${t.toString()} into a TypeScript declaration (TODO?)';
        }
    }
}


// ---

// ---

class DocRenderer {
    public static function renderDoc(doc:String, indent:String):String {
        var parts = [];
        parts.push('$indent/**');
        var lines = doc.split("\n");
        for (line in lines) {
            line = line.trim();
            if (line.length > 0) { // TODO: don't skip empty lines betwen non-empty ones
                if (line.charCodeAt(0) != "*".code)
                    line = '* $line';
                parts.push('$indent $line');
            }
        }
        parts.push('$indent */');
        return parts.join("\n");
    }
}

class Generator {
    static inline var HEADER = "// Generated by Haxe TypeScript Declaration Generator :)";
    static inline var NO_EXPOSE_HINT = "// No types were @:expose'd.\n// Read more at http://haxe.org/manual/target-javascript-expose.html";

    static function wrapInNamespace(packageName: String, className: String, fn:String->String->String):String {
		var packageDecl = packageName != "" ? "declare namespace " + packageName + " {" : "";
        return '${packageDecl}\n${fn(className, "")}\n}';
    }

    static function generateFunctionDeclaration(packageName: String, className: String, cl:ClassType, f:ClassField):String {
        return wrapInNamespace(packageName, className, function(name, indent) {
            var parts = [];
            if (f.doc != null)
                parts.push(DocRenderer.renderDoc(f.doc, indent));

            switch [f.kind, f.type] {
                case [FMethod(_), TFun(args, ret)]:
                    var prefix =
                        if (indent == "") // so we're not in a namespace (meh, this is hacky)
                            "export function "
                        else
                            "function ";
                    parts.push(renderFunction(name, args, ret, f.params, indent, prefix));
                default:
                    throw new haxe.macro.Error("This kind of field cannot be exposed to JavaScript", f.pos);
            }

            return parts.join("\n");
        });
    }

    static function renderFunction(name:String, args:Array<{name:String, opt:Bool, t:Type}>, ret:Type, params:Array<TypeParameter>, indent:String, prefix:String):String {
        var tparams = renderTypeParams(params);
        return '$indent$prefix$name$tparams(${ArgsRenderer.renderArgs(args)}): ${TypeRenderer.renderType(ret)};';
    }

    static function renderTypeParams(params:Array<TypeParameter>):String {
        return
            if (params.length == 0) ""
            else "<" + params.map(function(t) return return t.name).join(", ") + ">";
    }

    public static function generateClassDeclaration(packageName: String, className: String, cl:ClassType):String {

        return wrapInNamespace(packageName, className,  function(name, indent) {
            var parts = [];

            if (cl.doc != null)
                parts.push(DocRenderer.renderDoc(cl.doc, indent));

            // TODO: maybe it's a good idea to output all-static class that is not referenced
            // elsewhere as a namespace for TypeScript
            var tparams = renderTypeParams(cl.params);
            parts.push('$indent${if (indent == "") "export " else ""}class $name$tparams {');

            {
                var indent = indent + "\t";

                var privateCtor = true;
                if (cl.constructor != null) {
                    var ctor = cl.constructor.get();
                    privateCtor = false;
                    if (ctor.doc != null)
                        parts.push(DocRenderer.renderDoc(ctor.doc, indent));
                    switch (ctor.type) {
                        case TFun(args, _):
                            var prefix = if (ctor.isPublic) "" else "private "; // TODO: should this really be protected?
                            parts.push('${indent}${prefix}constructor(${ArgsRenderer.renderArgs(args)});');
                        default:
                            throw "wtf";
                    }
                } else {
                    parts.push('${indent}private constructor();');
                }

                function addField(field:ClassField, isStatic:Bool) {
                    if (field.isPublic) {
                        if (field.doc != null)
                            parts.push(DocRenderer.renderDoc(field.doc, indent));

                        var prefix = if (isStatic) "static " else "";

                        switch [field.kind, field.type] {
                            case [FMethod(_), TFun(args, ret)]:
                                parts.push(renderFunction(field.name, args, ret, field.params, indent, prefix));

                            case [FVar(_,write), _]:
                                switch (write) {
                                    case AccNo|AccNever:
                                        prefix += "readonly ";
                                    default:
                                }
                                parts.push('$indent$prefix${field.name}: ${TypeRenderer.renderType(field.type)};');

                            default:
                        }
                    }
                }

                for (field in cl.fields.get()) {
                    addField(field, false);
                }

                for (field in cl.statics.get()) {
                    addField(field, true);
                }
            }

            parts.push('$indent}');
            return parts.join("\n");
        });
    }


}
