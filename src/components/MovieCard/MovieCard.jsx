import PropTypes from 'prop-types';
import { BASE_URL } from 'services/moviesAPI';
import s from './MovieCard.module.css';

function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div className={s.movieCardContainer}>
      <img
        className={s.movieCardImg}
        src={`${BASE_URL}${poster_path}`}
        alt={title}
        width="300"
      />

      <div className={s.movieCardDesc}>
        <h2 className={s.movieCardTitle}>
          {title}({release_date.slice(0, 4)})
        </h2>
        <p>User score: {vote_average * 10}%</p>
        <h3 className={s.movieCardTitle}>Overview</h3>
        <p>{overview}</p>
        <h3 className={s.movieCardTitle}>Genres</h3>
        <ul className={s.movieGenres}>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MovieCard;
