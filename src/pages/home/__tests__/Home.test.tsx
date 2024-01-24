import { render, screen } from '@testing-library/react';
import { Home } from '../index';
import { MovieContext } from '../../../context/movie-context';

describe('<Home/> component', function(){

    it('Should render correctly', function(){

        render(<Home />);
        expect(screen.getByTestId('home')).toBeInTheDocument();
        //Check if home component is rendered

        const inputBase = screen.getByPlaceholderText(/Search for movies or Tv series./i);
        expect(inputBase).toBeInTheDocument();

    })

})