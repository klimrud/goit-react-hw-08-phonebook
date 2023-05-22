import React from 'react';
import css from 'components/Home/Home.module.css';

export const Home = () => {
  return (
    <>
      <div className={css.wrapper}>
       <section className={css.content}>
        <p className={css.text}>Welcome</p>
        <h3 className={css.content}> !PHONE BOOK!</h3>
        <p className={css.text}>Register to start using...</p>
        </section>
      </div>
    </>
  );
};
