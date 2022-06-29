import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRevies } from '../../services/moviesAPI';
import Loader from 'components/Loader/Loader';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      try {
        const { results } = await fetchMovieRevies(movieId);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  console.log(reviews);
  return (
    <>
      {loading && <Loader />}
      {reviews === [] && <p>We don't have any reviews for this movie</p>}
      {reviews !== [] && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
