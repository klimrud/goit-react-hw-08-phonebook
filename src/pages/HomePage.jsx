import React from 'react';

const HomePage = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#FFD700',
        }}
      >
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color:'#2F4F4F'
          }}
        >
         
          Welcome
        </p>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '	#696969',
          }}
        > !PHONE BOOK!</h2>
        <p
          style={{
             display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color:'#2F4F4F',
          }}
        >
          Register to start using...
        </p>
      </div>
    </>
  );
};

export default HomePage;
