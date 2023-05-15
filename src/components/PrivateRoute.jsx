import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import authSelectors from "store/auth/auth-selectors";


export default function PrivateRouter({
  // component: Component,
   redirectTo = '/',
  children,
  ...routerProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routerProps} >
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}