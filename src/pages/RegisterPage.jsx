import React from 'react';
import { RegisterForm } from 'components/Register/RegisterForm';

const RegisterPage = () => {
  return (
    <>
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
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
