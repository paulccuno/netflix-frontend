import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SecondaryButton from '../../general/secondaryButton';
import { movieDetail } from '../../../routes/routes';
import CatalogHeader from '../header';
import './styles.scss';

const DEFAULT_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/8/8a/Brooklyn_Nine-Nine_Logo.png';

const MainMedia = ({ media, serie }) => {
  const history = useHistory();

  const season = 7;
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  const handlePlay = () => history.push(movieDetail(media?.id));

  return (
    <div className='main-movie'>
      <CatalogHeader />
      <img className='logo' src={DEFAULT_LOGO} alt='' />
      {serie && (
        <div className='serie-content'>
          <h3 className='season'>Ve la temporada {season}</h3>
          <p>{description}</p>
        </div>
      )}
      <div className='actions'>
        <SecondaryButton
          text='Reproducir'
          icon='play_arrow'
          bgColor='#FFF'
          color='#000'
          onClick={handlePlay}
        />
        <SecondaryButton text='Más información' icon='info' bgColor='#303030' color='#FFF' />
      </div>
    </div>
  );
};

MainMedia.propTypes = {
  serie: PropTypes.bool,
  media: PropTypes.object.isRequired,
};

MainMedia.defaultProps = {
  serie: false,
};

export default MainMedia;
