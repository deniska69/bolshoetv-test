import { useSelector } from 'react-redux';

import classes from './Landing.module.css';

import Subscriptions from './subscriptions/Subscriptions';

const Landing = () => {
    const listMovies = useSelector(state => state.movies.allMovies);
    const listSubscriptions = [];
    
    for (let i = 0; i < listMovies.length; i++) {
        if(i === 0){
            listSubscriptions.push(listMovies[i].subscriptions);
        } else {
            if(listMovies[i].subscriptions !== listMovies[i - 1].subscriptions){
                listSubscriptions.push(listMovies[i].subscriptions);
            }
        };
    }; 

    return(
        <div className={classes.Landing}>
            <div>Большое ТВ</div>
            <div>{listMovies.length}</div>
            {listSubscriptions.map((subscription, index) => (
                <Subscriptions key={index} subscriptions={subscription} />
            ))}
        </div>
    );
};

export default Landing;