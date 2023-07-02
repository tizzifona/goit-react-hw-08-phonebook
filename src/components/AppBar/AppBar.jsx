import { useSelector } from 'react-redux';
import { userLoggedIn } from '../Redux/selector';
import Navigation from '../Navigation';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(userLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

export default AppBar;
