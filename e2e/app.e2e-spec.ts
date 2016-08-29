import { BirdGamePage } from './app.po';

describe('bird-game App', function() {
  let page: BirdGamePage;

  beforeEach(() => {
    page = new BirdGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
