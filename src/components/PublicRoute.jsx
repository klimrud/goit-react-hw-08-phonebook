import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from 'store/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routerProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log('shouldRedirect', shouldRedirect);
  return (
    <Route {...routerProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
