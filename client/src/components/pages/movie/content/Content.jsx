import classes from './Content.module.css';
import Badge from '../../../ui/badge/Badge';
import Button from '../../../ui/button/Button';

const Content = ({movie, campaign_id}) => {

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
            <div className={classes.Trailer}>
                <iframe src={movie.trailer} 
                        title={movie.title}/>
            </div>
            <div className={classes.AppButtons}>
                <Button className={'AppStore'} 
                        campaign_id={campaign_id} 
                        content_id={movie.id} />
                <Button className={'GooglePlay'} 
                        campaign_id={campaign_id} 
                        content_id={movie.id} />
            </div>
        </div>
    );
};

export default Content;