import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as dataService from './utils/newsDataService';


jest.mock(`./utils/newsDataService`);


describe('App Component Tests', () => {

  describe('fetchData tests', () => {

    // 1 - Does useEffect actually run the fetchData function (and by extension the fetchNews function)
    // 2 - Is the Body component rendered when data is available?
    // 2.1 - Is the news thumbnail rendered when data is available
    // 2.2 - Is the news headline rendered when data is available
    // 4 - Is the error markup displayed when there is an error?

    test('1 - should make a call to fetchNews when useEffect is called', async () => {
      // Arrange
      const expectedReturn = [
        {
            "id": "australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "type": "article",
            "sectionId": "australia-news",
            "sectionName": "Australia news",
            "webPublicationDate": "2022-07-20T10:53:44Z",
            "webTitle": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
            "webUrl": "https://www.theguardian.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "apiUrl": "https://content.guardianapis.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "fields": {
                "headline": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
                "byline": "Adeshola Ore",
                "thumbnail": "https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg",
                "bodyText": "some news text",
            },
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
        }];
      dataService.fetchNews.mockImplementation(() => expectedReturn);
      render(<App />);

      // Act
      // Assert
      // waiting for the useEffect hook to have run use waitFor without querying the screen
      await waitFor(() => expect(dataService.fetchNews).toHaveBeenCalledTimes(1));

    });

    test('2.1 - should render the returned news thumbnail', async () => {
      // Arrange
      const expectedReturn = [
        {
            "id": "australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "type": "article",
            "sectionId": "australia-news",
            "sectionName": "Australia news",
            "webPublicationDate": "2022-07-20T10:53:44Z",
            "webTitle": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
            "webUrl": "https://www.theguardian.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "apiUrl": "https://content.guardianapis.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "fields": {
                "headline": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
                "byline": "Adeshola Ore",
                "thumbnail": "https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg",
                //I have decided to alter the textBody's real text in this tests because it is too long
                "bodyText": "some news text",
            },
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
        }];
      dataService.fetchNews.mockImplementation(() => expectedReturn);
      render(<App />);

      // Act: The altText of the thumbnail is the news headline

      const testNewsItem = await screen.findByAltText(expectedReturn[0].fields.headline)


      // Assert
      expect(testNewsItem).toBeInTheDocument();
    });
    test('2.2 - should render the returned news headline', async () => {
      // Arrange
      const expectedReturn = [
        {
            "id": "australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "type": "article",
            "sectionId": "australia-news",
            "sectionName": "Australia news",
            "webPublicationDate": "2022-07-20T10:53:44Z",
            "webTitle": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
            "webUrl": "https://www.theguardian.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "apiUrl": "https://content.guardianapis.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
            "fields": {
                "headline": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
                "byline": "Adeshola Ore",
                "thumbnail": "https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg",
                //I have decided to alter the textBody's real text in this tests because it is too long
                "bodyText": "some news text",
            },
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
        }];
      dataService.fetchNews.mockImplementation(() => expectedReturn);
      render(<App />);

      // Act
      const testNewsItem = await screen.findByText(expectedReturn[0].fields.headline)


      // Assert
      expect(testNewsItem).toBeInTheDocument();
    });

    test('3 - should render the "no news" message when an error is returned', async () => {
      // Arrange
      const expectedReturn = { error: `Error` };
      dataService.fetchNews.mockImplementation(() => expectedReturn);
      render(<App />);

      // Act
      // Need some way of waiting for the useEffect hook to have run use await and findBy queries here
      const noData = await screen.findByText(/no news/i, { exact: false });

      // Assert
      expect(noData).toBeInTheDocument();
    });

  })
});