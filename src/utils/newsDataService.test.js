// 1 - Test the fetchNews actually makes the external data call
// 2 - Test that a successful request returns the right data
// 3 - Test that an unsuccessful request returns the error object
import axiosMock from 'axios';
import testData from "../../mockNewsData.json"

import { fetchNews } from "./newsDataService";

jest.mock(`axios`);

describe('fetchNews tests', () => {

    test('1 - should actually make the external data call', () => {
        // Arrange
        
        // When you come across axios.get in the test code, use this function instead and return the resolved data
        axiosMock.get.mockResolvedValueOnce(testData);
        // Act
        fetchNews();
        // Assert
        expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);

    });
 
    test('2 - should have successful request returning the right data', async () => {
        
        // When you come across axios.get in the test code, use this function instead and return the resolved data
        axiosMock.get.mockResolvedValueOnce(testData);
        // Act
        const result = await fetchNews();

        // Assert 
        expect(result).toEqual(testData.data.response.results);
    });

    test('3 - should have unsuccessful request returning the error object', async () => {
        // Arrange
        const e = { code: 404, message: "not found" };
        axiosMock.get.mockRejectedValueOnce(e)
        // Act
        const result = await fetchNews()
        // Assert
        expect(result).toEqual({error: e.code, message: e.message});
    }); 
});