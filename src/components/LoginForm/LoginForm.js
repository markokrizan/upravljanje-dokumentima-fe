import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css';

export default function LoginForm({login}){
    const initialValues = {
        email: '',
        password: ''
      }
    
      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please provide a valid email address.').required('Email address is required'),
        password: Yup.string()
      });
    
      const handleSubmit = (values, { resetForm, setErrors, setSubmitting}) => {
        login(values, setErrors);
        resetForm();
        setSubmitting(false);
      }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema = {validationSchema}
            onSubmit={handleSubmit}
        >
        {({
        isSubmitting,
        errors,
        touched //use if needed
        }) =>
            (<Form>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center">
                      <Field type="email" name="email" placeholder="Email" className="form-control w-50" />
                  </div>
                  <div className="col-md-12 d-flex justify-content-center">
                      {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div className="col-md-12 d-flex justify-content-center mt-1">
                      <Field type="password" name="password" placeholder="Password" className="form-control w-50" />
                  </div> 
                  <div className="col-md-12 d-flex justify-content-center">
                    {errors.password && <p>{errors.password}</p>}
                  </div>
                </div>
                <div class="row">  
                  <div class="col-md-12 mt-1"><button className="btn btn-success" disabled={isSubmitting}>Submit</button></div>
                </div>
            </Form>)}
        </Formik>
      );
}