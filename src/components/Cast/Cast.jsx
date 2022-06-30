import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import defaultPerson from '../../images/defaultPerson.jpg';
import s from './Cast.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
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
      {cast && (
        <ul className={s.castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s.castItem}>
              {profile_path && (
                <img
                  src={`${BASE_URL}${profile_path}`}
                  alt={name}
                  width="120"
                  className={s.castImg}
                />
              )}
              {!profile_path && (
                <img
                  src={defaultPerson}
                  alt={name}
                  width="120"
                  className={s.castImg}
                />
              )}
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
