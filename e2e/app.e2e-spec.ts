import { Angular2NodePage } from './app.po';

describe('angular2-node App', function() {
  let page: Angular2NodePage;

  beforeEach(() => {
    page = new Angular2NodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
