import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLoggedIn } from '../Redux/selector';
import css from './Navigation.module.css';
import React from 'react';
import homeIcon from './icons/homeIcon.png';
import contactsIcon from './icons/contactsIcon.png';

const Navigation = () => {
  const isLoggedIn = useSelector(userLoggedIn);
  return (
    <nav className={css.navContainer}>
      <Link className={css.navLink} to="/">
        <img src={homeIcon} alt="Home Icon" className={css.navIcon} />
        Home
      </Link>
      {isLoggedIn && <Link className={css.navLink} to="/contacts">
        <img src={contactsIcon} alt="Contacts Icon" className={css.navIcon} />
        Contacts
      </Link>}
    </nav>
  );
};

export default Navigation;
