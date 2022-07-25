import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { API_URL } from '../../../../core/config';

import classes from './Content.module.css';

const Content = ({id, rk}) => {
    const listMovies = useSelector(state => state.movies.allMovies);
    const [movie, setMovie] = useState();
    

    useEffect(()=>{
        if(listMovies.length > 0){
            setMovie(listMovies.find(item => item.id === id));
        }
        
        // eslint-disable-next-line
    },[listMovies]);
    

    useEffect(()=>{
        if(movie){
            console.log(movie);
        }
        // eslint-disable-next-line
    },[movie]);

    

    return(
        <div className={classes.Movie}>
            <div className={classes.Title}>
                Фильм найден.
            </div>
        </div>
    );
};

export default Content;