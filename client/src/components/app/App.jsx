import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../actions/movies';
//import { getIPv4 } from '../../actions/visitors';
import { setUserAgent, setUID } from '../../reducers/visitorReducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Landing from '../pages/landing/Landing';
import Movie from '../pages/movie/Movie';

const App = () => {
  const dispatch = useDispatch();
  const uidState = useSelector(state => state.visitor.uid);

  useEffect(() => {
    dispatch(getAllMovies());

    // User-Agent
    dispatch(setUserAgent(window.navigator.userAgent));

    // UID
    if(localStorage.getItem('uid')){
      dispatch(setUID(localStorage.getItem('uid')));
    } else{
      const uid = uuidv4();
      localStorage.setItem('uid', uid);
      
      if(!uidState){
        dispatch(setUID(localStorage.getItem('uid')));
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/film" element={<Movie />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
