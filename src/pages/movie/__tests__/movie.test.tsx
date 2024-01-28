import { fireEvent, render, screen } from "@testing-library/react";
import { Movie } from "../index";
import { BrowserRouter as Router } from "react-router-dom";

describe('<Movie/> component', function () {

    it('Should render correctly', function () {

        render(
            <Router>
                <Movie />
            </Router>
        );

        const searchInput = screen.getByPlaceholderText('Search for movies.');
        expect(searchInput).toBeInTheDocument();

        const title = screen.getByText('Movies, Enjoy!');
        expect(title).toBeInTheDocument();

    });

    it('Search functionality', function(){

        render(
            <Router>
                <Movie />
            </Router>
        );

        const searchInput = screen.getByPlaceholderText('Search for movies.');
        fireEvent.change(searchInput, {target: {value: 'Beyond Earth'}});

        const resultTitle = screen.getByTestId('search-result-title');
        expect(resultTitle).toBeInTheDocument();

    });

})