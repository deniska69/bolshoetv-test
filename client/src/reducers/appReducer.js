const SET_ONE_MOVIE = 'SET_ALL_MOVIE';
const SET_ALL_MOVIES = 'SET_ALL_MOVIES';

const defaultState = {
    oneMovie: {},
    allMovies: []
};

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ONE_MOVIE:
            return {...state, movies: action.payload};
        case SET_ALL_MOVIES:
            return {...state, movies: action.payload};
        default:
            return state
    }
}

export const setOneMovies = (movie) => ({type: SET_ONE_MOVIE, payload: movie});
export const setAllMovies = (movies) => ({type: SET_ALL_MOVIES, payload: movies});
