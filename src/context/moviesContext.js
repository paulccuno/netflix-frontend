import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { USER_MOVIES } from '../constants/storage';

export const defaultContext = {
  userMovies: [],
  addMovie: () => {},
  removeMovie: () => {}
};

const MoviesContext = createContext(defaultContext);

export const MoviesProvider = ({ children }) => {
  const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {
    setUserMovies(JSON.parse(localStorage.getItem(USER_MOVIES)));
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_MOVIES, JSON.stringify(userMovies || []));
  }, [userMovies]);

  const addMovie = movie => {
    const found = userMovies.find(_movie => _movie.id === movie.id);
    if (!found) setUserMovies(prev => prev.concat(movie));
  };

  const removeMovie = id => setUserMovies(prev => prev.filter(movie => movie.id !== id));

  const value = { userMovies, addMovie, removeMovie };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

MoviesProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default MoviesContext;
