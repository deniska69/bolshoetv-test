import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classes from './App.module.css';
import { getAllMovies } from '../../actions/movies';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.App}>
      Большое ТВ
    </div>
  );
}

export default App;
