import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../general/button';
import { AUTH_TOKEN, TOKEN_KEY } from '../../../constants/storage';
import { profileSelection } from '../../../routes/routes';
import { EMPTY_PASSWORD, EMPTY_USERNAME } from '../../../constants/messageErrors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resolveErrorMessage } from '../../../utils/functions';
import * as Yup from 'yup';
import Input from '../../general/input';
import './styles.scss';

const formFields = {
  email: 'username',
  password: 'password',
};

const schema = Yup.object().shape({
  [formFields.email]: Yup.string().required(EMPTY_USERNAME),
  [formFields.password]: Yup.string().required(EMPTY_PASSWORD),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = values => {
    setLoading(true);
    fetch('http://ec2-54-92-189-40.compute-1.amazonaws.com:4000/api/token/', {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(() => {})
      .finally(() => {
        setLoading(false);
        localStorage.setItem(TOKEN_KEY, AUTH_TOKEN);
        history.push(profileSelection);
      });
  };

  return (
    <div className='login-form'>
      <h2 className='title'>Inicia Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register(formFields.email)}
          placeholder='Correo'
          error={resolveErrorMessage(errors, [formFields.email])}
          errorClassName='error'
        />
        <Input
          {...register(formFields.password)}
          type='password'
          placeholder='Contraseña'
          error={resolveErrorMessage(errors, [formFields.password])}
          errorClassName='error'
        />
        <br />
        <Button
          text={loading ? 'Cargando...' : 'Iniciar sesión'}
          className='submit'
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default LoginForm;
