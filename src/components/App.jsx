import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRefreshing } from './Redux/selector';
import { refreshUser } from './Redux/Auth/authOperations';
import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';


const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'));

const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(userRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div>
      <h1>
        Refreshing users...
      </h1>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App
