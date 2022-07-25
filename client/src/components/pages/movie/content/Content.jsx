// import { API_URL } from '../../../../core/config';

import classes from './Content.module.css';

const Content = ({movie}) => {

    return(
        <div className={classes.Content}>
            <div className={classes.Title}>
                {movie.title}
            </div>
        </div>
    );
};

export default Content;