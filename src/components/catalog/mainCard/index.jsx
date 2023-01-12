import React, { useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { image_server } from '../../../services/catalog,services';
import { movieDetail } from '../../../routes/routes';
import ButtonIcon from '../../general/buttonIcon';
import MoviesContext from '../../../context/moviesContext';
import './styles.scss';

const MainCard = ({ movie, genres }) => {
  const { poster_path, title, vote_average, adult, genre_ids, id } = movie;
  const { addMovie, userMovies } = useContext(MoviesContext);
  const history = useHistory();

  const genresNames = useMemo(() => {
    return genre_ids.map(id => genres.find(genre => genre.id === id)?.name).slice(0, 3) || [];
  }, [genre_ids, genres]);

  const isFavorite = useMemo(() => {
    return !!userMovies.find(_movie => _movie.id === id);
  }, [userMovies, id]);

  const handlePlay = () => history.push(movieDetail(id));

  const handleAdd = () => addMovie(movie);

  return (
    <article className='main-card'>
      <img className='cover' src={`${image_server}/${poster_path}`} alt='' />
      <div className='details'>
        <div className='actions'>
          <ButtonIcon icon='play_arrow' onClick={handlePlay} />
          <ButtonIcon icon={isFavorite ? 'done' : 'add'} onClick={handleAdd} />
        </div>
        <p className='title'>{title}</p>
        <div className='informative'>
          <p className='votes'>{vote_average} votos</p>{' '}
          <p className='rate'>{adult ? '16+' : '7+'}</p>
        </div>
        <div className='genres'>
          {genresNames.map((name, index) => (
            <span key={`genre-${index}`}>{name}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

MainCard.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default MainCard;
