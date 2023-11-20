import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
export const App = () => {
  return (
    <div style={{ margin: '0 auto', padding: '0 36px' }}>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/movies" element={<SharedLayout />}>
          <Route index element={<Movies />} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
