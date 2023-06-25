import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsRefreshing, selectIsLoggeIn } from 'redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggeIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
