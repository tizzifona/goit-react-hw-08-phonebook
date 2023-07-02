import { useDispatch, useSelector } from "react-redux";
import { selectUser } from '../Redux/selector';
import { userLogOut } from '../Redux/Auth/authOperations';
import css from './UserMenu.module.css';
import iconLogout from './icons/iconLogout.png';
import React from 'react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenuContainer}>
      <p className={css.userMenuText} >Welcome, {user.name} ({user.email})</p>
      <button className={css.userMenuBtn} type="submit" onClick={() => dispatch(userLogOut())}>
        <img src={iconLogout} alt="Log Out Icon" className={css.iconLogout} />
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
