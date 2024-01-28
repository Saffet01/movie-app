import { render, screen } from "@testing-library/react";
import { Sidebar } from "../index";
import { BrowserRouter as Router } from "react-router-dom";

describe('<Sidebar> component', function () {

    it('Should render correctly', function () {

        render(
            <Router>
                <Sidebar />
            </Router>
        );

        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();

        const moviesLink = screen.getByText('Movies');
        expect(moviesLink).toBeInTheDocument();

        const tvSeriesLink = screen.getByText('Tv Series');
        expect(tvSeriesLink).toBeInTheDocument();

        const bookmark = screen.getByText('Bookmark');
        expect(bookmark).toBeInTheDocument();

    });

    it('sidebar links have correct href', function() {

        render(
            <Router>
                <Sidebar />
            </Router>
        );

        const homeLink = screen.getByTestId('sidebar-link-0');
        expect(homeLink.getAttribute('href')).toBe('/');

        const movieLink = screen.getByTestId('sidebar-link-1');
        expect(movieLink.getAttribute('href' )).toBe('/movies');

        const tvSeriesLink = screen.getByTestId('sidebar-link-2');
        expect(tvSeriesLink.getAttribute('href')).toBe('/tv-series');

        const bookmarkLink = screen.getByTestId('sidebar-link-3');
        expect(bookmarkLink.getAttribute('href')).toBe('/bookmark'); 
    })

})