import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../../components/RegisterForm';

export default function Register({register, registerError}) {

  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="card text-center w-50">
            <div className="card-header"> Sign up</div>
            <div className="card-body">
              {registerError}
               <RegisterForm register={register}/>
              <div className="row">
                <div className="col-md-12 mt-2">
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

