import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../actions/movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../pages/landing/Landing';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
