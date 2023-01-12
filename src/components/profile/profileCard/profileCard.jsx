import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DEFAULT_IMG = 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg';

const ProfileCard = ({ id, img, username, onClick }) => {
  const handleClick = e => {
    onClick(id, e);
  };

  return (
    <div className='profile-card' onClick={handleClick}>
      <img className='cover' src={img || DEFAULT_IMG} alt='' />
      <p className='name'>{username}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  username: PropTypes.string,
  onClick: PropTypes.func,
};

ProfileCard.defaultProps = {
  img: DEFAULT_IMG,
  onClick: () => {},
};

export default ProfileCard;
