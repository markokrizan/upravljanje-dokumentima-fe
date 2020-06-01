import React from 'react'
import {Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './FolderForm.css';

export default function FolderForm ({ saveFolder, account, setShowFolderModal }){
    const initialValues = {
        name : '',
    }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required')
    });
    
    const handleSubmit = (values, { setErrors, setSubmitting }) => {
        saveFolder({ values, account }, setErrors);
        setSubmitting(false);
        setShowFolderModal(false);
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
            (<Form className="text-center">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center">
                      <Field type="text" name="name" placeholder="Name" className="form-control w-50" />
                  </div>
                  <div className="col-md-12 d-flex justify-content-center">
                      {errors.name && <p>{errors.name}</p>}
                  </div>
                </div>
                <div className="row">  
                  <div className="col-md-12 mt-1"><button className="btn btn-success" disabled={isSubmitting}>Save</button></div>
                </div>
            </Form>)}
        </Formik>
      );
}