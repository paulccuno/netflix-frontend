import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonIcon = ({ icon, onClick }) => {
  return (
    <div className='button-icon' onClick={onClick}>
      <span className='material-icons'>{icon}</span>
    </div>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonIcon;
