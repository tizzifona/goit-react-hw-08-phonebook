import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userLoggedIn, userRefreshing } from '../Redux/selector';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {

  const isLoggedIn = useSelector(userLoggedIn);
  const isRefreshing = useSelector(userRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
