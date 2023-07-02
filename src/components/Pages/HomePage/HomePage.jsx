import css from './HomePage.module.css';
import React from 'react';
import homePic from './images/homePagePic.gif';
import { Link } from 'react-router-dom';
const HomePage= () => {
  return (
    <div className={css.homeContainer}>
        <h1> Welcome to your own Phone Book! </h1>
      <img src={homePic} alt="Home Gif" className={css.homePic} />
      <p> Please, <Link className={css.homeLink} to="/login">Log in</Link> to your account, or <Link className={css.homeLink} to="/register">Register</Link>! </p>
    </div>
  );
};
export default HomePage
