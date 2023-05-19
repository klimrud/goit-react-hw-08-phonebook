import { useSelector } from 'react-redux';
// import { Navigate } from "react-router-dom";
// import { Route, Redirect } from 'react-router-dom';
import { Route} from 'react-router-dom';
import * as  Redirect from 'react-router-dom';
import authSelectors from 'store/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routerProps
}) {
  // const isAuth = useSelector((state)=> state.auth.token)
  // return !isAuth? children: <Navigate to ='/' />;

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log('shouldRedirect', shouldRedirect);
  return (
    <Route {...routerProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
