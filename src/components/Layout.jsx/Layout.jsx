import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import { ToastContainer } from 'react-toastify';



export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading....</div>} >
        <Outlet />
      </Suspense>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </>
  );
};