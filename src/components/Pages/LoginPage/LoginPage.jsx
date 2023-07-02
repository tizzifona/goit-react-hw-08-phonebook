import React from 'react';
import LoginForm from '../../LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.loginContainer}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
