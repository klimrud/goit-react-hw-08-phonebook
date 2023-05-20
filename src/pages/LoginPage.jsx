import React from 'react';
import { LoginForm } from 'components/Login/LoginForm';

const LoginPage = () => {
  return (
    <main>
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
