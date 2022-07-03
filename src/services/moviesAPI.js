import axios from 'axios';

export const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

const KEY = '0b8103dd54def1b2724a61ab95182ae5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const fetchSearchMovieByQuery = async queryName => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${queryName}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data;
};
