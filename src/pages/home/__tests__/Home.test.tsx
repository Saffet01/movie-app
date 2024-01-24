import { render, screen } from '@testing-library/react';
import { Home } from '../index';
import { MovieContext } from '../../../context/movie-context';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Home/> component', function () {

    it('Should render correctly', function () {

        render(
            <Router>
                <MovieContext.Provider value={{ state: { movies: [] }, dispatch: () => { } }}>
                    <Home />
                </MovieContext.Provider>
            </Router>
        );


        expect(screen.getByTestId('home')).toBeInTheDocument();
        //Home component render edildi mi anlamak için.
    })

    it('Should have an empty search input on initial render', function () {
        render(
            <MovieContext.Provider value={{ state: { movies: [] }, dispatch: () => { } }}>
                <Home />
            </MovieContext.Provider>
        );
        const inputBase = screen.getByPlaceholderText(/Search for movies or Tv series./i) as HTMLInputElement;
        expect(inputBase.value).toBe('');
    });

})