import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/Auth/authOperations';
import css from './LoginForm.module.css';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState({ email: false, password: false });

  const handleChange = e => {
    const { name } = e.target;
    setHasError(prevErrors => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
      Notiflix.Notify.failure('Please, enter your information!',{
        position: 'center-top',
        distance: '10px',
      });
      setHasError({
        email: !email.value,
        password: !password.value,
      });
      return;
    }

    dispatch(userLogin({ email: email.value, password: password.value }));
    form.reset();
  };

  return (
    <div>
      <h2>Log in</h2>
      <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.loginLabel}>Email</label>
        <input
          className={`${css.loginInput} ${hasError.email ? css.error : ''}`}
          type="email"
          name="email"
          onChange={handleChange}
        />
        <label className={css.loginLabel}>Password</label>
        <input
          className={`${css.loginInput} ${hasError.password ? css.error : ''}`}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button className={css.loginButton} type="submit">
          Log In
        </button>
      </form>
      <p className={css.loginRegText}>Don't have an account? <Link className={css.loginRegLink} to="/register">Register now!</Link> </p>
    </div>
  );
};

export default LoginForm;
