import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegisterForm.css';

export default function RegisterForm({register}){
    const initialValues = {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      }
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please provide a valid email address.').required('Email address is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required(),
        first_name: Yup.string().required(),
        last_name: Yup.string().required()
    });

    const handleSubmit = (values, { resetForm, setErrors, setSubmitting}) => {
        register(values, setErrors);
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
            touched
        }) => 
            <Form>
                <div>
                    <Field type="email" name="email" placeholder="Email" />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    {errors.password && <p>{errors.password}</p>}
                </div>   
                <div>
                    <Field type="text" name="first_name" placeholder="First name" />
                    {errors.first_name && <p>{errors.first_name}</p>}
                </div> 
                <div>
                    <Field type="text" name="last_name" placeholder="Last name" />
                    {errors.last_name && <p>{errors.last_name}</p>}
                </div> 
                <button disabled={isSubmitting}>Submit</button>
            </Form>}
        </Formik>
      );
}