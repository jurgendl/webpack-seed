import { App } from "../src/components/app";

let app: App;

describe('A suite is just a function', function () {
  beforeEach(() => {
    app = new App();
  });

  it('2 x 2 === 4', function () {
    const res = app.init();
	// expect(res).toBe(4);
  });
});
