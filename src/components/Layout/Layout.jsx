import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

import css from './Layout.module.css'

export const Layout = () => {
  return (
    <section className={css.containers}>
      <Header />
      <Suspense fallback={<div>Loading....</div>} >
        <Outlet />
      </Suspense>
      <Footer />
    </section>
  );
};
