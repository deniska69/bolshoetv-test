const SET_ALL_MOVIES = 'SET_ALL_MOVIES';

const defaultState = {
    allMovies: []
};

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ALL_MOVIES:
            return {...state, allMovies: action.payload};
        default:
            return state
    }
}

export const setAllMovies = (movies) => ({type: SET_ALL_MOVIES, payload: movies});
