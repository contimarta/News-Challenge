import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import Body from "./Body";
import testData from "../../../mockNewsData.json";

describe('Body tests', () => {

    describe('NewsCard conditional render tests', () => {

        test('should display "News are loading..." when news length is 0', () => {
            
            // Act
            render(<Body news={[]} />);
            // Assert
            expect(screen.getByText(/news are loading.../i)).toBeInTheDocument();

        });

        //The following three tests all use the same test data and need to render the same page
        beforeEach(() => {
            //Act
            render(<Router><Body news={testData.data.response.results} /></Router>);
        
        })

        test('should display news heading when data contains news objects', () => {
            // Does not need to arrange the data as it is imported from the mock data
            // Act is done in beforeEach
            // Assert
            const newsList = screen.getAllByRole(`heading`);
            expect(newsList.length).toBe(testData.data.response.results.length);

        }); 
        test('should display every news image when data contains news objects', () => {
            // Does not need to arrange the data as it is imported from the mock data
            // Act is done in beforeEach
            // Assert
            const newsList = screen.getAllByRole(`img`);
            expect(newsList.length).toBe(testData.data.response.results.length);

        }); 
        test('should display every news link when data contains news objects', () => {
            // Does not need to arrange the data as it is imported from the mock data
            // Act is done in beforeEach
            // Assert
            const newsList = screen.getAllByRole(`link`);
            expect(newsList.length).toBe(testData.data.response.results.length);

        }); 
    });
});