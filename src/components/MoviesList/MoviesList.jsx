import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASE_URL } from 'services/moviesAPI';
import defaultPoster from '../../images/defaultPoster.jpg';
import s from './MoviesList.module.css';

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
              <img
                src={poster_path ? `${BASE_URL}${poster_path}` : defaultPoster}
                alt={title}
                className={s.movieListImg}
              />
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

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};

export default MoviesList;
