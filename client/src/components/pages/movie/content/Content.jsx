// import { API_URL } from '../../../../core/config';

import classes from './Content.module.css';
import Badge from '../../../ui/badge/Badge';

const Content = ({movie}) => {

    return(
        <div className={classes.Content}>
            <div className={classes.Title}>
                {movie.title}
            </div>
            <div className={classes.Badges}>
                <Badge>{`Кинопоиск ${movie.rate_kp}`}</Badge>
                <Badge>{movie.release_year}</Badge>
                <Badge>{movie.country}</Badge>
                <Badge>{movie.genre}</Badge>
                <Badge>{movie.rating_age}</Badge>
            </div>
        </div>
    );
};

export default Content;