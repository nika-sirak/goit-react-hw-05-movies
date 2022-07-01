import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import CastList from './CastList/CastList';
import s from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);

      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p className={s.error}>{error.message}</p>}
      {cast && <CastList castArr={cast} />}
    </>
  );
}

export default Cast;
