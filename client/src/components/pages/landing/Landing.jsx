import { useSelector } from 'react-redux';

import classes from './Landing.module.css';

const Landing = () => {
    const listMovies = useSelector(state => state.movies.allMovies);

    return(
        <div className={classes.Landing}>
            {listMovies.map((movie, index) => (
                <div key={index}>{movie.title}</div>
            ))}
        </div>
    );
};

export default Landing;