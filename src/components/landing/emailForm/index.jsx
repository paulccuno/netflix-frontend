import React from 'react';
import './styles.scss';

const EmailForm = () => {
  return (
    <div className='email-form'>
      <h4 className='instructions'>
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de
        Netflix.
      </h4>
      <form className='form'>
        <input className='input' type='email' required />
        <button className='submit' type='submit'>
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
