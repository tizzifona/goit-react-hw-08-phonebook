import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userLoggedIn } from '../Redux/selector';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(userLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
