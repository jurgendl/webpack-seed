import {WebpackSeedApp} from "../src/components/webpack-seed-app";

let app: WebpackSeedApp;

describe('A suite is just a function', function () {
	beforeEach(() => {
		app = new WebpackSeedApp();
	});

	it('2 x 2 === 4', function () {
		const res = app.init();
		expect(res).toBe("Webpack Seed App initialized!");
	});
});