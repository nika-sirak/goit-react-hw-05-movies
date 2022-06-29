import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Review';
import NotFoundPage from 'pages/NotFoundPage';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
