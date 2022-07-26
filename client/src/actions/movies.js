import axios from 'axios';
import { setAllMovies } from '../reducers/moviesReducer';
import { API_URL } from '../core/config';

export const getAllMovies = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/allMovies`);
            dispatch(setAllMovies(response.data.movies));
        } catch (e) {
            console.log(e);
        }
    };
};