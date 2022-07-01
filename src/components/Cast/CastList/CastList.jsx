import PropTypes from 'prop-types';
import { BASE_URL } from '../../../services/moviesAPI';
import defaultPerson from '../../../images/defaultPerson.jpg';
import s from './CastList.module.css';

function CastList({ castArr }) {
  return (
    <ul className={s.castList}>
      {castArr.map(({ id, profile_path, name, character }) => (
        <li key={id} className={s.castItem}>
          <img
            src={profile_path ? `${BASE_URL}${profile_path}` : defaultPerson}
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
  );
}

CastList.propTypes = {
  castArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default CastList;
