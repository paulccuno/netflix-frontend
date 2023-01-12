import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage';
import './styles.scss';

const Input = forwardRef(({ error, errorClassName, ...props }, ref) => (
  <>
    <input className={`input ${error ? 'active' : ''}`} {...props} ref={ref} />
    <ErrorMessage message={error} className={errorClassName} />
  </>
));

Input.propTypes = {
  error: PropTypes.string,
  errorClassName: PropTypes.string,
};

export default Input;
