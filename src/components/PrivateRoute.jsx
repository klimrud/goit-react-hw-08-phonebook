// import { useSelector } from "react-redux";
// // import { Navigate } from "react-router-dom";
// import { Route} from 'react-router-dom';
// import * as  Redirect from 'react-router-dom';
// import authSelectors from "store/auth/auth-selectors";


// export const PrivateRoute = ({
//   //  component: Component,
//     redirectTo = '/',
//   children,
//     ...routerProps
// })=> {
//   // const isAuth = useSelector((state)=> state.auth.token)
//   // return isAuth? children: <Navigate to ='/login' />;

//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route 
//      {...routerProps}
//      >
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   )
// }