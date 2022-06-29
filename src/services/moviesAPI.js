import axios from 'axios';

const KEY = '0b8103dd54def1b2724a61ab95182ae5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieRevies = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
};
