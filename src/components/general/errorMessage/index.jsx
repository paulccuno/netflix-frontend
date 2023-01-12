import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ErrorMessage = ({ message, className }) => {
  return <p className={`error-message ${className}`}>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};

export default ErrorMessage;
