import { BemificationPlaygroundPage } from './app.po';

describe('bemification-playground App', () => {
  let page: BemificationPlaygroundPage;

  beforeEach(() => {
    page = new BemificationPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
