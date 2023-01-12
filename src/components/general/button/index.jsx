import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, onClick, className, disabled }) => (
  <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
