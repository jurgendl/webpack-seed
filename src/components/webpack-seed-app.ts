import { MOD_CONST, ModClass } from "./webpack-seed-module";

export class WebpackSeedApp {
	init(): void {
		console.log("Hello world!");
		console.log(MOD_CONST);
		console.log(new ModClass().modConst);
	}
}