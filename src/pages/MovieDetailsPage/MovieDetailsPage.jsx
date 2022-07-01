import {
  useParams,
  useLocation,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { fetchMovieById } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const result = await fetchMovieById(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <section className={s.movieCard}>
      <Link to={backLinkHref} className={s.movieCardBtn}>
        <AiFillCaretLeft size="12" fill="#ffffff" />
        Back to movies
      </Link>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {movie && <MovieCard movie={movie} />}

      {!error && (
        <div className={s.movieEdition}>
          <h3 className={s.movieEditionTitle}>Additional information</h3>
          <ul className={s.movieEditionList}>
            <li>
              {movie && (
                <NavLink
                  to="cast"
                  className={navData =>
                    navData.isActive ? s.activeLink : s.movieEditionLink
                  }
                >
                  Cast
                </NavLink>
              )}
            </li>
            <li>
              {movie && (
                <NavLink
                  to="reviews"
                  className={navData =>
                    navData.isActive ? s.activeLink : s.movieEditionLink
                  }
                >
                  Reviews
                </NavLink>
              )}
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet movieeId={movieId} />
          </Suspense>
        </div>
      )}
    </section>
  );
}

export default MovieDetailsPage;
