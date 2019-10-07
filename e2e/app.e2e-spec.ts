import { CarbonAngularStarterPage } from './app.po';

describe('carbon-angular-starter App', () => {
	let page: CarbonAngularStarterPage;

	beforeEach(() => {
		page = new CarbonAngularStarterPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
