import SomeTsClass from "./.././some-ts-class";





declare namespace client {
export class SuperClientComponent {
	constructor();
	thisIsNice: {bar: string, bow: number};
	saySomething(foo: string): void;
}
}


export default client.SuperClientComponent;