import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';
import ReviewsList from './ReviewsList/ReviewsList';
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
        const { results } = await fetchMovieReviews(movieId);
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
      {error && <p className={s.error}>{error.message}</p>}
      {!reviews && !error && (
        <p className={s.reviewError}>
          We don't have any reviews for this movie.
        </p>
      )}
      {reviews && <ReviewsList reviewsArr={reviews} />}
    </>
  );
}

export default Reviews;
