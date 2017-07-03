import { AngularCuatroPage } from './app.po';

describe('angular-cuatro App', () => {
  let page: AngularCuatroPage;

  beforeEach(() => {
    page = new AngularCuatroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
