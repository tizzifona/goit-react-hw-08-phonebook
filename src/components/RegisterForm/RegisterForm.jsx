import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../Redux/Auth/authOperations';
import css from './RegisterForm.module.css';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({ name: '', email: '', password: '' });
  const [hasError, setHasError] = useState({ name: false, email: false, password: false });

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
    setHasError(prevErrors => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = fields;

    if (!name || !email || !password) {
      Notiflix.Notify.failure('Please, enter your information!',{
        position: 'center-top',
        distance: '10px',
      });
      setHasError({
        name: !name,
        email: !email,
        password: !password,
      });
      return;
    }

    dispatch(userRegister({ name, email, password }));
    setFields({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <h2>Create your account!</h2>
      <form className={css.regForm} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.regLabel}>Username</label>
        <input
          className={`${css.regInput} ${hasError.name ? css.error : ''}`}
          type="text"
          name="name"
          value={fields.name}
          onChange={handleChange}
        />
        <label className={css.regLabel}>Email</label>
        <input
          className={`${css.regInput} ${hasError.email ? css.error : ''}`}
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
        />
        <label className={css.regLabel}>Password</label>
        <input
          className={`${css.regInput} ${hasError.password ? css.error : ''}`}
          type="password"
          name="password"
          placeholder="The password must be at least 7 characters"
          value={fields.password}
          onChange={handleChange}
        />
        <button className={css.regButton} type="submit">
          Register
        </button>
      </form>
      <p className={css.regLoginText}>Already have an account? <Link className={css.regLoginLink} to="/login">Log in now!</Link> </p>
    </div>
  );
};

export default RegisterForm;

