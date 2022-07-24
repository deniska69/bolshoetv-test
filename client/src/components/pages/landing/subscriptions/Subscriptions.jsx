import { useSelector } from 'react-redux';

import classes from './Subscriptions.module.css';

import Card from '../card/Card';

const Subscriptions = ({subscriptions}) => {
    const listMovies = useSelector(state => state.movies.allMovies);

    return(
        <div className={classes.Subscriptions}>
            <div className={classes.Title}>{subscriptions}</div>
            <div className={classes.Movies}>
                {listMovies.map((movie, index) => (
                    movie.subscriptions === subscriptions &&
                    <Card key={index} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default Subscriptions;