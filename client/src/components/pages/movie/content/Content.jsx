import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { visitorsInfo } from '../../../../actions/visitors';
import { setURLLast } from '../../../../reducers/visitorReducer';

import classes from './Content.module.css';
import Badge from '../../../ui/badge/Badge';
import Button from '../../../ui/button/Button';

const Content = ({movie, campaign_id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickToBtnBack= () => {
        navigate(`/`);
    }

    const clickURL = (store) => {
        //UTM: URL Leave on site
        dispatch(setURLLast(`https://bolshoe.app.link/WujiUvQIMrb?campaign_id=${campaign_id}&content_id=${movie.id}`));

        //Call function to write user-utm-date to data base
        dispatch(visitorsInfo(`Following to ${store}`))
      }

    return(
        <div className={classes.Content}>
            <Button className={'Back'} 
                    onClick={() => clickToBtnBack()} />
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
                        content_id={movie.id}
                        onClick={() => clickURL('AppStore')} />
                <Button className={'GooglePlay'} 
                        campaign_id={campaign_id} 
                        content_id={movie.id}
                        onClick={() => clickURL('GooglePlay')} />
            </div>
            <div className={classes.Description}>
                {movie.description}
            </div>
        </div>
    );
};

export default Content;