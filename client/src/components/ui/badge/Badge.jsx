import classes from './Badge.module.css';

const Badge = ({children}) => {
    return(
        <div className={classes.Badge}>
            {children}
        </div>
    );
};

export default Badge;