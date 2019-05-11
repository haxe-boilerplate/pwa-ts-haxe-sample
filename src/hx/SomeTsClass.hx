package;

@:jsRequire('./some-ts-class', 'default') // root is ts/
extern class SomeTsClass {
  public function new(someArg: String);
}
