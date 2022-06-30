import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovieByQuery } from '../services/moviesAPI';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearchBox = name => {
    setSearchParams({ query: name });
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    const fetchMoviesByQuery = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSearchMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesByQuery();
  }, [query]);

  return (
    <>
      <SearchBox onSubmit={handleSearchBox} />
      {loading && <Loader />}
      {movies && <MoviesList moviesArr={movies} />}
    </>
  );
}

export default MoviesPage;
