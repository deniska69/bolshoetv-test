import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import classes from './Movie.module.css';
import Content from './content/Content';

const Movie = () => {
    const [searchParams] = useSearchParams();
    const [isURL, setIsURL] = useState(false);
    const [id, setID] = useState('');
    const [rk, setRK] = useState('');

    useEffect(()=>{
        setID(searchParams.get("id"));
        setRK(searchParams.get("rk"));
        // eslint-disable-next-line
    },[]);

    useEffect(()=>{
        if(id){
            setIsURL(true);
        };

    },[id, rk]);

    return(
        <div className={classes.Movie}>
            {isURL && <Content id={id} rk={rk} />}
            {!isURL && <div>Ошибка параметров запроса</div>}
        </div>
    );
};

export default Movie;