import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <img src={`${BASE_URL}${poster_path}`} alt="" />
      <h2>
        {title}({release_date.slice(0, 4)})
      </h2>

      <p>User score: {vote_average * 10}%</p>

      <h3>Overview</h3>
      <p>{overview}</p>

      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCard;
