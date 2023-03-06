import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NewsDetail from './NewsDetail';
import testData from "../../../mockNewsData.json";

//this defines the mock method scrollTo that is used to scroll to the top of the page to avoid console errors
const scrollToMock = jest.fn();
Object.defineProperty(window, 'scrollTo', {value: scrollToMock});

describe('NewsDetail tests', () => {
  beforeEach(() => {
    //No need to arrange the data for the tests as it is imported from mockNewsData.json
    //Act: render the NewsDetail component for the news item found in the index 1 of the mockNewsData.json
    render(
      <MemoryRouter initialEntries={['/news/1']}> {/* initialEntries simulates that the component has been called with url "/news/1" */}
        <Routes>
          <Route path="/news/:id" element={<NewsDetail news={testData.data.response.results} />} />
        </Routes>
      </MemoryRouter>
    );
  })

test('1-Test that it renders an image with the correct alt text', async () => {
  
  // Assert
  const image = await screen.findByAltText(testData.data.response.results[1].fields.headline)
  expect(image).toBeInTheDocument();
})


test('2-Test that it renders the text of the news', async () => {
  
    // Assert
    const bodyText = await screen.findByText(testData.data.response.results[1].fields.bodyText)
    expect(bodyText).toBeInTheDocument();
  })

  test('3-Test that it renders the headline of the news', async () => {
  
    // Assert
    const headline = await screen.findByText(testData.data.response.results[1].fields.headline)
    expect(headline).toBeInTheDocument();
  })


  test("4-Test that there is a link to the news on The Guardian's site", async () => {
    // Assert
    
    let newsList = screen.getAllByRole(`link`)
    expect(newsList[0]).toHaveAttribute('href', testData.data.response.results[1].webUrl);

  })







})