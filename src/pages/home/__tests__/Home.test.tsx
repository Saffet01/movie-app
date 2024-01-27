import { fireEvent, render, screen } from '@testing-library/react';
import { Home } from '../index';
import { MovieContext } from '../../../context/movie-context';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieDataType } from '../../../assets/data';


describe('<Home/> component', function () {

    const mockMovies:MovieDataType[] = [
        {
            id: "1",
            title: "Movie1",
            thumbnail: {
              trending: {
                small: "./thumbnails/beyond-earth/trending/small.jpg",
                large: "./thumbnails/beyond-earth/trending/large.jpg",
              },
              regular: {
                small: "./thumbnails/beyond-earth/regular/small.jpg",
                medium: "./thumbnails/beyond-earth/regular/medium.jpg",
                large: "./thumbnails/beyond-earth/regular/large.jpg",
              },
            },
            year: 2023,
            category: "Movie",
            rating: "PG",
            isBookmarked: false,
            isTrending: true,
          },
          {
            id: "2",
            title: "Movie2",
            thumbnail: {
              trending: {
                small: "./thumbnails/beyond-earth/trending/small.jpg",
                large: "./thumbnails/beyond-earth/trending/large.jpg",
              },
              regular: {
                small: "./thumbnails/beyond-earth/regular/small.jpg",
                medium: "./thumbnails/beyond-earth/regular/medium.jpg",
                large: "./thumbnails/beyond-earth/regular/large.jpg",
              },
            },
            year: 2012,
            category: "Movie",
            rating: "PG",
            isBookmarked: false,
            isTrending: false,
          },
    ]

    it('Should render correctly', function () {
        render(
            <Router>
                <Home />
            </Router>
        );
        const inputBase = screen.getByTestId('textField');
        expect(inputBase).toBeInTheDocument();
    });

    it('should display Trending and Recommended for You sections when search is empty', function () {
        render(
            <Router>
                <MovieContext.Provider value={{ state: { movies: mockMovies }, dispatch: jest.fn() }}>
                    <Home />
                </MovieContext.Provider>
            </Router>
        );
        expect(screen.getByText('Trending')).toBeInTheDocument();
        expect(screen.getByText('Recommended For You')).toBeInTheDocument();
    });

    it('should display search results when search is not empty', async function(){

        render(
            <Router>
                <MovieContext.Provider value={{ state: { movies: mockMovies }, dispatch: jest.fn() }}>
                    <Home />
                </MovieContext.Provider>
            </Router>
        );

        const inputElement = screen.getByPlaceholderText('Search for movies or Tv series.') as HTMLInputElement;
        fireEvent.change(inputElement, {target: {value: 'Movie1'}});
        expect(inputElement.value).toBe('Movie1');
        
        const resultTitle = await screen.findByTestId('search-result-title');
        expect(resultTitle).toBeInTheDocument();
    });

})