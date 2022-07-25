import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { API_URL } from '../../../../core/config';

import classes from './Content.module.css';

const Content = ({id, rk}) => {
    const listMovies = useSelector(state => state.movies.allMovies);
    const [isMovie, setIsMovie] = useState(false);
    const [movie, setMovie] = useState();

    for (let i = 0; i < listMovies.length; i++) {
        if(listMovies[i].id === id){
            setMovie(listMovies[i]);
            setIsMovie(true);
        }
    };

    if(isMovie){
        return(
            <div className={classes.Movie}>
                <div className={classes.Title}>
                    Фильм найден.
                </div>
            </div>
        );
    } else {
        return(
            <div className={classes.Movie}>
                Фильм не найден.
            </div>
        );
    }
};

export default Content;