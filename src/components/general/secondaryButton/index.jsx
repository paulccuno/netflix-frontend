import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SecondaryButton = ({ icon, text, onClick, color, bgColor }) => {
  return (
    <button
      className='secondary-button'
      onClick={onClick}
      style={{ color, backgroundColor: bgColor }}
    >
      <span className='material-icons icon'>{icon}</span>
      <span className='text'>{text}</span>
    </button>
  );
};

SecondaryButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default SecondaryButton;
