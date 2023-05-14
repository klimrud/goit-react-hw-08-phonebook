import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx/Layout';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'store/auth/auth-operations';
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

 useEffect(() =>{ 
  dispatch(getCurrentUser());
 },[dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>   
    </>
  );
};
