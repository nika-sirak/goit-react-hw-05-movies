import PropTypes from 'prop-types';
import s from './ReviewsList.module.css';

function ReviewsList({ reviewsArr }) {
  return (
    <ul className={s.reviewsList}>
      {reviewsArr.map(({ id, author, content }) => (
        <li key={id} className={s.reviewsItem}>
          <p className={s.author}>Author: {author}</p>
          <p className={s.review}>{content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviewsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
export default ReviewsList;
