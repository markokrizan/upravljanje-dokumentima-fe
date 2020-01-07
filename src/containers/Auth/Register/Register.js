import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../../components/RegisterForm';

export default function Register({register, registerError}) {

  return (
    <div>
      <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <div class="card text-center w-50">
            <div class="card-header"> Sign up</div>
            <div class="card-body">
              {registerError}
               <RegisterForm register={register}/>
              <div class="row">
                <div class="col-md-12 mt-2">
                  <Link to="/login">Log in instead </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

