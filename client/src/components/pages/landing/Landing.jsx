import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setSource, setURLVisit, setURLLast, setDateVisit, setDateLast, setCampaignID, setContentiD } from '../../../reducers/visitorReducer';
import { visitorsInfo } from '../../../actions/visitors';

import classes from './Landing.module.css';
import Subscriptions from './subscriptions/Subscriptions';

const Landing = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const listMovies = useSelector(state => state.movies.allMovies);    
    const listSubscriptions = [];
    
    const urlCurrent = window.location.href;
    const date_visit = useSelector(state => state.visitor.date_visit);
    const url_visit = useSelector(state => state.visitor.url_visit);
    
    
    for (let i = 0; i < listMovies.length; i++) {
        if(i === 0){
            listSubscriptions.push(listMovies[i].subscriptions);
        } else {
            if(listMovies[i].subscriptions !== listMovies[i - 1].subscriptions){
                listSubscriptions.push(listMovies[i].subscriptions);
            }
        };
    }; 

    useEffect(()=>{
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
        dispatch(visitorsInfo('visit home page'));

        // eslint-disable-next-line
    },[]);

    return(
        <div className={classes.Landing}>
            {listSubscriptions.map((subscription, index) => (
                <Subscriptions key={index} subscriptions={subscription} />
            ))}
        </div>
    );
};

export default Landing;