import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegisterForm.css';

export default function RegisterForm({register}){
    const initialValues = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required()
    });

    const handleSubmit = (values, { resetForm, setErrors, setSubmitting}) => {
        register(values, setErrors);
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
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center">
                        <Field type="text" name="username" placeholder="Username" class="form-control w-50"/>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div class="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="password" name="password" placeholder="Password" class="form-control w-50"/>
                    </div> 
                    <div class="col-md-12 d-flex justify-content-center">
                        {errors.password && <p>{errors.password}</p>}
                    </div>  
                    <div class="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="firstName" placeholder="First name" class="form-control w-50" />
                    </div> 
                    <div class="col-md-12 d-flex justify-content-center">
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    <div class="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="lastName" placeholder="Last name" class="form-control w-50" />
                    </div> 
                    <div class="col-md-12 d-flex justify-content-center">
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-1"><button class="btn btn-success" disabled={isSubmitting}>Submit</button></div>
                </div>
            </Form>}
        </Formik>
      );
}
