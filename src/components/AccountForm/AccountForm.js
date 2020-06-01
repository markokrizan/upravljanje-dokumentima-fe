import React from 'react'
import {Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './AccountForm.css';

import Checkbox from '../Checkbox';

export default function AccountForm({account, saveAccount, closeModal}){
    const initialValues = {
        smtpAdress : '',
        smtpPort: '',
        inServerType: '',
        inServerAdress: '',
        inServerPort: '',
        username: '',
        password: '',
        displayName: '',
        isActive: false,
        ...account
      }
    
      const validationSchema = Yup.object().shape({
        smtpAdress: Yup.string().required('SMTP adress is required'),
        smtpPort: Yup.number().required('SMTP port is required'),
        inServerType: Yup.number().required('In server type is required'),
        inServerAdress: Yup.string().required('In server adress is required'),
        inServerPort: Yup.number().required('In server port is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        displayName: Yup.string().required('Display name is required')
      });
    
      const handleSubmit = (values, { setErrors, setSubmitting}) => {
        saveAccount(values, setErrors);
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
            setFieldValue
        }) =>
            (<Form>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <Field type="text" name="smtpAdress" placeholder="SMTP adress" className="form-control w-50" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.smtpAdress && <p>{errors.smtpAdress}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="number" name="smtpPort" placeholder="SMTP port" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.smtpPort && <p>{errors.smtpPort}</p>}
                    </div>  
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="number" name="inServerType" placeholder="In server type" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.inServerType && <p>{errors.inServerType}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="inServerAdress" placeholder="In server adress" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.inServerAdress && <p>{errors.inServerAdress}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="number" name="inServerPort" placeholder="In server port" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.inServerPort && <p>{errors.inServerPort}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="username" placeholder="Username" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                         {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="password" name="password" placeholder="Password" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Field type="text" name="displayName" placeholder="Display name" className="form-control w-50" />
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.displayName && <p>{errors.displayName}</p>}
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mt-1">
                        <Checkbox name="isActive" value={account.isActive}/>
                    </div> 
                    <div className="col-md-12 d-flex justify-content-center">
                        {errors.isActive && <p>{errors.isActive}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-2 d-flex justify-content-center">
                        <button className="btn btn-success" disabled={isSubmitting}>Save</button>
                    </div>
                </div>
          </Form>)}
        </Formik>
      );
}
         