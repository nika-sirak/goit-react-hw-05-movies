import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, BASE_URL } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import defaultPerson from '../../images/defaultPerson.jpg';
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
      {cast && (
        <ul className={s.castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s.castItem}>
              <img
                src={
                  profile_path ? `${BASE_URL}${profile_path}` : defaultPerson
                }
                alt={name}
                width="120"
                className={s.castImg}
              />
              <div>
                <p className={s.castDesc}>{name}</p>
                <p className={s.castDesc}>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
