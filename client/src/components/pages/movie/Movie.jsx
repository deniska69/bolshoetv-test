import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSource, setURLVisit, setURLLast, setCampaignID, setContentiD, setDateVisit, setDateLast } from '../../../reducers/visitorReducer';
import { visitorsInfo } from '../../../actions/visitors';

import classes from './Movie.module.css';
import Content from './content/Content';

const Movie = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [isURL, setIsURL] = useState(false);
    const [id, setID] = useState('');
    const [rk, setRK] = useState('');
    const listMovies = useSelector(state => state.movies.allMovies);
    const [movie, setMovie] = useState();

    const urlCurrent = window.location.href;
    const url_visit = useSelector(state => state.visitor.url_visit);
    const date_visit = useSelector(state => state.visitor.date_visit);

    useEffect(()=>{
        setID(searchParams.get('id'));
        setRK(searchParams.get('rk'));

        //UTM: Content iD
        dispatch(setContentiD(searchParams.get('id')));

        //UTM: Campaign ID
        dispatch(setCampaignID(searchParams.get('rk')));

        //UTM: Source
        dispatch(setSource(searchParams.get('source')));

        //UTM: URL Visit on site
        if(!url_visit){ dispatch(setURLVisit(urlCurrent)); }

        //UTM: URL Leave on site
        dispatch(setURLLast(urlCurrent));

        //UTM: Date visit on site
        if(!date_visit){ dispatch(setDateVisit(new Date())); }

        //UTM: Date leave from site
        dispatch(setDateLast(new Date()));

        //Call function to write user-utm-date to data base
        dispatch(visitorsInfo(`visit movie page id: ${searchParams.get('id')}`));

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
            {!isURL && <div>Ошибка параметров ссылки.</div>}
        </div>
    );
};

export default Movie;