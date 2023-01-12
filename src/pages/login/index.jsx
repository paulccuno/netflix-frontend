import React from 'react';
import logo from '../../assets/netflix-logo.png';
import { useHistory } from 'react-router-dom';
import { landing } from '../../routes/routes';
import LoginForm from '../../components/login/form';
import './styles.scss';

const Login = () => {
  const history = useHistory();

  const handleLogoClick = () => history.push(landing);

  return (
    <section className='login'>
      <div className='content'>
        <header>
          <img src={logo} alt='netflix-logo' onClick={handleLogoClick} />
        </header>
        <div className='form'>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
