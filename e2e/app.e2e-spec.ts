import { CloudrmClientNg2Page } from './app.po';

describe('cloudrm-client-ng2 App', function() {
  let page: CloudrmClientNg2Page;

  beforeEach(() => {
    page = new CloudrmClientNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
