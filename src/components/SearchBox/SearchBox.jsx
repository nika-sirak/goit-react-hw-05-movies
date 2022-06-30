import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './SearchBox.module.css';

function SearchBox({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleMovieChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName.trim() === '') {
      return toast.warning('Please, add some movie');
    }

    onSubmit(movieName);
    resetForm();
  };

  const resetForm = () => {
    setMovieName('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.search}>
      <input
        type="text"
        value={movieName}
        autoComplete="off"
        autoFocus
        onChange={handleMovieChange}
        placeholder="Movie title"
        className={s.searchTerm}
      ></input>
      <button type="submit" className={s.searchButton}>
        Search
      </button>
    </form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
