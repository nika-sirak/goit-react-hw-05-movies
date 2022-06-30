import { Link, useLocation } from 'react-router-dom';
import defaultPoster from '../../images/defaultPoster.jpg';
import s from './MoviesList.module.css';
const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

function MoviesList({ moviesArr }) {
  const location = useLocation();

  return (
    <ul className={s.movieList}>
      {moviesArr.map(
        ({ id, poster_path, title, original_title, original_name }) => (
          <li key={id} className={s.movieListItem}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={s.movieListLink}
            >
              {poster_path && (
                <img
                  src={`${BASE_URL}${poster_path}`}
                  alt={title}
                  className={s.movieListImg}
                />
              )}
              {!poster_path && (
                <img
                  src={defaultPoster}
                  alt={title}
                  className={s.movieListImg}
                />
              )}
              <h2 className={s.movieListTitle}>
                {original_title ?? original_name}
              </h2>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default MoviesList;
