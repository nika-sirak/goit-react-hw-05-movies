import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieById } from '../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const result = await fetchMovieById(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
        toast.error('Movie not found', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <Link to="/">Back to movies</Link>
      {loading && <Loader />}
      {movie && <MovieCard movie={movie} />}

      <div>
        <h3>Additional information</h3>
        <ul>
          <li> {movie && <Link to="cast">Cast</Link>}</li>
          <li>{movie && <Link to="reviews">Reviews</Link>}</li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet movieeId={movieId} />
        </Suspense>
      </div>
    </>
  );
}

export default MovieDetailsPage;
