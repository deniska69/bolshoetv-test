const SET_MOVIES = 'SET_MOVIES';

const defaultState = {
    movies: []
};

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_MOVIES:
            return {...state, movies: action.payload};
        default:
            return state
    }
}

export const setMovies = (movies) => ({type: SET_MOVIES, payload: movies});
