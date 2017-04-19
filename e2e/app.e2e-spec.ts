import { NeutrinoShowcasePage } from './app.po';

describe('neutrino-showcase App', () => {
  let page: NeutrinoShowcasePage;

  beforeEach(() => {
    page = new NeutrinoShowcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
