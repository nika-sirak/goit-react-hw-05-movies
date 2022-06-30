import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { fetchTrendMovies } from '../../services/moviesAPI';
import s from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTrendMovies();
        return setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className={s.homePage}>
      <h1 className={s.homePageTitle}>Trending today</h1>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {!error && <MoviesList moviesArr={movies} />}
    </section>
  );
}

export default HomePage;
