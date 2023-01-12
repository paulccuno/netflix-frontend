import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/netflix-logo.png';
import Button from '../../general/button';
import EmailForm from '../emailForm';
import { login } from '../../../routes/routes';
import { MAIN_BANNER_IMG } from '../../../constants/resources';

import './styles.scss';

const Header = () => {
  const history = useHistory();

  const handleClick = () => history.push(login);

  return (
    <header className='header'>
      <img src={logo} className='logo' alt='Netflix' />
      <div className='controls'>
        <Button text='Iniciar sesión' onClick={handleClick} />
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <div className='main'>
      <div className='wrapper'>
        <img src={MAIN_BANNER_IMG} className='img' alt='' />
        <div className='overlay' />
      </div>
      <div className='content'>
        <Header />
        <div className='email-section'>
          <h1 className='main-text'>Películas y series</h1>
          <h1 className='main-text'>ilimitadas y mucho más.</h1>
          <h3 className='subtitle'>Disfruta donde quieras. Cancela cuando quieras.</h3>
          <br />
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Main;
