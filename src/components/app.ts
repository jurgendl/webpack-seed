import { MOD_CONST, ModClass } from "./mod";

export class App {
	init(): void {
		console.log("Hello world!");
		console.log(MOD_CONST);
		console.log(new ModClass().modConst);
	}
}
