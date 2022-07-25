import classes from './Button.module.css';
import imageAppStore from '../../../assets/btn_app_appstore.png';
import imageGooglePlay from '../../../assets/btn_app_googleplay.png';

const Button = ({ children, className, onClick, campaign_id, content_id }) => {

  if(className === 'AppStore' || className === 'GooglePlay'){
    return (
      <a className={className === 'AppStore' ? classes.AppStore : classes.GooglePlay} 
         onClick={onClick} 
         href={`https://bolshoe.app.link/WujiUvQIMrb?campaign_id=${campaign_id}&content_id=${content_id}`}
         target='_blank'
         rel='noreferrer'>
        <img className={classes.Image} 
             src={className === 'AppStore' ? imageAppStore : imageGooglePlay} 
             alt={content_id} />
      </a>
    );
  };
};

export default Button;
