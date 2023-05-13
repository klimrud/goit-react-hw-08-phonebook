import React from 'react';
import css from 'components/Home/Home.module.css';

export const Home = () => {
  return (
    <>
      <div className={css.containers}>
        <p className={css.text}>Welcome</p>
        <h2 className={css.title}> !PHONE BOOK!</h2>
        <p className={css.text}>Register to start using...</p>
      </div>
    </>
  );
};
