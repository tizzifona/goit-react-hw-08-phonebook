import React from 'react';
import css from './NotFoundPage.module.css';
import notFoundPic from './images/pageNotFound.gif';
const PageNotFound = () => {
  return (
    <div className={css.notFoundContainer}>
        <h2 className={css.notFoundText}>Oooops, something went wrong!</h2>
      <img src={notFoundPic} alt="Page Not Found Gif"  />
    </div>
  );
};

export default PageNotFound;
