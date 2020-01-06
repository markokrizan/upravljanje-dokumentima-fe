import React, { useState } from 'react';
import LoginForm from '../../../components/LoginForm';

export default function Login({logIn, loginError}) {

  return (
    <div>
      {loginError}
      <h1>Login</h1>
      <LoginForm login={logIn}/>
    </div>
  );
}



