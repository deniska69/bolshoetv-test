import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './Movie.module.css';
import Content from './content/Content';

const Movie = () => {
    const [searchParams] = useSearchParams();
    const [isURL, setIsURL] = useState(false);
    const [id, setID] = useState('');
    const [rk, setRK] = useState('');
    const listMovies = useSelector(state => state.movies.allMovies);
    const [movie, setMovie] = useState();

    useEffect(()=>{
        setID(searchParams.get("id"));
        setRK(searchParams.get("rk"));
        // eslint-disable-next-line
    },[]);

    useEffect(()=>{
        if(id && listMovies.length > 0){
            setIsURL(true);
            setMovie(listMovies.find(item => item.id === id));
        };
        // eslint-disable-next-line
    },[id, listMovies]);

    return(
        <div className={classes.Movie}>
            {isURL && <Content movie={movie} campaign_id={rk}/>}
            {!isURL && <div>Ошибка параметров запроса</div>}
        </div>
    );
};

export default Movie;