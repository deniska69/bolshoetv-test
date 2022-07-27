import classes from './Button.module.css';
import imageAppStore from '../../../assets/btn_app_appstore.png';
import imageGooglePlay from '../../../assets/btn_app_googleplay.png';

const Button = ({ className, onClick, campaign_id, content_id }) => {

  if(className === 'AppStore' || className === 'GooglePlay'){
    return (
      <a className={className === 'AppStore' ? classes.AppStore : classes.GooglePlay} 
         href={`https://bolshoe.app.link/WujiUvQIMrb?campaign_id=${campaign_id}&content_id=${content_id}`}
         target='_blank'
         rel='noreferrer'
         onClick={() => onClick()}>
        <img className={classes.Image} 
             src={className === 'AppStore' ? imageAppStore : imageGooglePlay} 
             alt={content_id} />
      </a>
    );
  };

  if(className === 'Back'){
    return(
      <button className={classes.Back} onClick={onClick}>
        {`Показать все подборки`}
      </button>
    )
  }
};

export default Button;
