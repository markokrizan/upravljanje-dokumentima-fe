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
                <div>
                    <Field type="email" name="email" placeholder="Email" />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    {errors.password && <p>{errors.password}</p>}
                </div>   
                <button disabled={isSubmitting}>Submit</button>
            </Form>)}
        </Formik>
      );
}