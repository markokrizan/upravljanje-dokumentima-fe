import React, { useState } from 'react';
import RegisterForm from '../../../components/RegisterForm';

export default function Register({register, registerError}) {

  return (
    <div>
      {registerError}
      <h1>Register</h1>
      <RegisterForm register={register}/>
    </div>
  );
}

