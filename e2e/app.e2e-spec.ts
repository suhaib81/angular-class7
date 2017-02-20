import { AngularClass7Page } from './app.po';

describe('angular-class7 App', () => {
  let page: AngularClass7Page;

  beforeEach(() => {
    page = new AngularClass7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
