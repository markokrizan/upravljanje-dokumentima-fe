import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm';

export default function Login({logIn, loginError}) {

  return (
    <div>
      <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <div class="card text-center w-50">
            <div class="card-header"> Log in </div>
            <div class="card-body">
              {loginError}
              <LoginForm login={logIn}/>
              <div class="row">
                <div class="col-md-12 mt-2">
                  <Link to="/register">Don't have an account? </Link>
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



