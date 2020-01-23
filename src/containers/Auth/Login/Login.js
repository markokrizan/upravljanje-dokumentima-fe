import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm';

export default function Login({logIn, loginError}) {
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="card text-center w-50">
            <div className="card-header"> Log in </div>
            <div className="card-body">
              {loginError}
              <LoginForm login={logIn}/>
              <div className="row">
                <div className="col-md-12 mt-2">
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



