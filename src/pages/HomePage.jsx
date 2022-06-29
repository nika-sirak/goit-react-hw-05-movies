import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { fetchTrendMovies } from '../services/moviesAPI';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

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

  console.log(movies);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      <ul>
        {!error &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`${BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.original_title ?? movie.original_name}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
