import { useSelector } from 'react-redux';

import classes from './Subscriptions.module.css';

const Subscriptions = ({subscriptions}) => {
    // eslint-disable-next-line
    const listMovies = useSelector(state => state.movies.allMovies);

    console.log(subscriptions)

    return(
        <div className={classes.Subscriptions}>
            {listMovies.map((movie, index) => (
                movie.subscriptions === subscriptions &&
                <div key={index}>{movie.title}</div>
            ))}
        </div>
    );
};

export default Subscriptions;