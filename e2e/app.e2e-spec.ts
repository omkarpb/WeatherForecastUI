import { AppPage } from './app.po';

describe('weather-forecast-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display forecast message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Weather Forecast for next five days');
  });
});
