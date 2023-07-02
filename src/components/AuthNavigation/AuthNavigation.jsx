import { Link } from 'react-router-dom';
import css from './AuthNavigation.module.css';
import React from 'react';
import regIcon from './icons/regIcon.png';
import loginIcon from './icons/loginIcon.png';

export const AuthNavigation = () => {
  return (
    <div className={css.authNavContainer}>
      <Link className={css.authNavLink} to="/register">
        <img src={regIcon} alt="Registration Icon" className={css.authNavIcon} />
        Register
      </Link>
      <Link className={css.authNavLink} to="/login">
        <img src={loginIcon} alt="Login Icon" className={css.authNavIcon} />
        Log in
      </Link>
    </div>
  );
};
