import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactForm({contact, saveContact, closeModal}){
    const initialValues = {
        firstName : '',
        lastName: '',
        displayName: '',
        email: '',
        note: '',
        ...contact
      }
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        displayName: Yup.string().required('Display name is required'),
        email: Yup.string().required('Email is required'),
        note: Yup.string().required('Note is required')
    });
    
    const handleSubmit = (values, { setErrors, setSubmitting}) => {
        saveContact(values, setErrors);
        setSubmitting(false);
        closeModal();
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
            (<Form>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <Field type="text" name="firstName" placeholder="First name" className="form-control w-50" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="lastName" placeholder="Last name" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.lastName && <p>{errors.lastName}</p>}
                    </div>  
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="displayName" placeholder="Display name" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.displayName && <p>{errors.displayName}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="email" name="email" placeholder="Email" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="note" placeholder="Note" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.note && <p>{errors.note}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-1  d-flex justify-content-center">
                        <button className="btn btn-success" disabled={isSubmitting}>Save</button>
                    </div>
                </div>
          </Form>)}
        </Formik>
      );
}
         