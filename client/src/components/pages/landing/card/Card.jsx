import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../../core/config';

import classes from './Card.module.css';

const Card = ({movie}) => {
    const navigate = useNavigate();

    const clickToCard = () => {
        navigate(`/film?id=${movie.id}`);
    }

    return(
        <div className={classes.Card} onClick={() => clickToCard()}>
            <img className={classes.Image} 
                 src={`${API_URL + '\\movies\\' + movie.image}`} 
                 alt={movie.title} />
            <div className={classes.Title}>
                {movie.title}
            </div>
            <div className={classes.Genre}>
                {movie.genre}
            </div>
        </div>
    );
};

export default Card;