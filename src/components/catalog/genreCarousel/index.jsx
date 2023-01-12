import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovies } from '../../../services/catalog,services';
import CatalogCarousel from '../catalogCarousel';
import CatalogCard from '../catalogCard';

const GenreCarousel = ({ id, title, genres }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(id).then(data => setMovies(data.results.slice(0, 10)));
  }, [id]);

  return (
    <CatalogCarousel
      title={title}
      items={movies}
      renderItem={movie => <CatalogCard key={`movie-${movie.id}`} movie={movie} genres={genres} />}
    />
  );
};

GenreCarousel.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
};

GenreCarousel.defaultProps = {
  genres: [],
};

export default GenreCarousel;
