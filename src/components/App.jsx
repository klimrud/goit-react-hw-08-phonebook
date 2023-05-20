import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'store/auth/auth-operations';

import authSelectors from 'store/auth/auth-selectors';
// import PublicRoute from './PublicRoute';
// import { PrivateRoute } from './PrivateRoute';

// import HomePage from 'pages/HomePage';
// import ContactsPage from 'pages/ContactsPage';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getRefreshingUser);
  console.log('isRefreshingUser', isRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    // isRefreshingUser && (
    <> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          {/* <Route path="/" element={<Layout />}>
          <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} /> */}

{/*           
           <PublicRoute exact path="/" restricted>
          <Layout />
        
          <PublicRoute index exact>
            <HomePage />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
        
        </PublicRoute>  */}

        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>


    </>
    // )
  );
};
