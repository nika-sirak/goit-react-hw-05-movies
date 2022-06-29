import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
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
        <ul>
          {cast.map(actor => (
            <li>
              <img
                src={`${BASE_URL}${actor.profile_path}`}
                alt={actor.name}
                width="120"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
