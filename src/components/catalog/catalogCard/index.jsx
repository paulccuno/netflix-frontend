import React, { useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { image_server } from '../../../services/catalog,services';
import { movieDetail } from '../../../routes/routes';
import ButtonIcon from '../../general/buttonIcon';
import MoviesContext from '../../../context/moviesContext';
import './styles.scss';

const CatalogCard = ({ movie, genres }) => {
  const { id, backdrop_path, genre_ids, vote_average } = movie;
  const history = useHistory();
  const { addMovie, removeMovie, userMovies } = useContext(MoviesContext);

  const genresNames = useMemo(() => {
    return genre_ids.map(id => genres.find(genre => genre.id === id)?.name).slice(0, 3) || [];
  }, [genre_ids, genres]);

  const isFavorite = useMemo(() => {
    return !!userMovies.find(_movie => _movie.id === id);
  }, [userMovies, id]);

  const handlePlay = () => history.push(movieDetail(id));

  const handleAdd = () => addMovie(movie);

  const handleRemove = () => removeMovie(id);

  return (
    <div style={{ width: '18%' }}>
      <article className='catalog-card'>
        <img className='cover' src={`${image_server}/${backdrop_path}`} alt='' />
        <div className='details'>
          <div className='options'>
            <ButtonIcon icon='play_arrow' onClick={handlePlay} />
            <ButtonIcon icon={isFavorite ? 'done' : 'add'} onClick={handleAdd} />
            <ButtonIcon icon='thumb_up' />
            <ButtonIcon icon='thumb_down' />
            {isFavorite && <ButtonIcon icon='close' onClick={handleRemove} />}
          </div>
          <p className='vote'>{vote_average} votos</p>
          <div className='genres'>
            {genresNames.map((name, index) => (
              <p key={`gen-${index}`}>{`${name} `}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

CatalogCard.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.arrayOf(PropTypes.object),
};

CatalogCard.defaultProps = {
  genres: [],
};

export default CatalogCard;
