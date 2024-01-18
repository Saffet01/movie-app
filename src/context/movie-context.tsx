import { ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";
import { MovieList } from "../components/movie-list";

interface MovieContextProps {
    children: ReactNode
}

interface MovieAction {
    type: string,
    id: string
}

const MovieList: MovieDataType[] = moviesData;

interface MovieState {
    movies: MovieDataType[];
}

const initialMovieState: MovieState = {
    movies: MovieList,
}

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
    switch (action.type) {
        case "TOGGLE BOOKMARK":
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if (movie.id === action.id) {
                        return { ...movie, isBookmarked: !movie.isBookmarked };
                    }
                    return movie;
                })
            };
            default:
                return state;
    }
}

export const MovieContext = createContext<{
    state: MovieState,
    dispatch: React.Dispatch<MovieAction>
}>(
    {
        state: initialMovieState,
        dispatch: () => { }
    }
)

export const MovieProvider = ({ children }: MovieContextProps) => {
    const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
    return <MovieContext.Provider value={state, dispatch} >{children}</MovieContext.Provider>
}