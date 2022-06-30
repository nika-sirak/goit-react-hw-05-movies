import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRevies } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      try {
        const { results } = await fetchMovieRevies(movieId);
        if (results.length) {
          setReviews(results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!reviews && (
        <p className={s.reviewError}>
          We don't have any reviews for this movie.
        </p>
      )}
      {reviews && (
        <ul className={s.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={s.reviewsItem}>
              <p className={s.author}>Author: {author}</p>
              <p className={s.review}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
