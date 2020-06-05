import React, { useState } from 'react'
import {Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './FolderForm.css';

export default function FolderForm ({ saveFolder, account, setShowFolderModal, folder, folders }){
    const [ selectedParentFolder, setSelectedParentFolder ] = useState(null);

    const initialValues = {
        name : '',
        ...folder
    }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required')
    });
    
    const handleSubmit = (values, { setErrors, setSubmitting }) => {
        const data = { ...values, parentFolderId: selectedParentFolder }

        saveFolder({ data, account }, setErrors);
        setSubmitting(false);
        setShowFolderModal && setShowFolderModal(false);
    }

    const renderParentOptions = () => {
        if (!folder) {
            return (
                <>
                    <option value={null}>No parent</option>
                    {folders.map(currentFolder => {
                        return <option key={currentFolder.id} value={currentFolder.id}>{currentFolder.name}</option>
                    })}
                </>
            );
        }

        return (
            <>
                <option value={null}>No parent</option>
                {folders.filter(currentFolder => currentFolder.id !== folder.id).map(currentFolder => {
                    return (
                        <option 
                            key={currentFolder.id}
                            value={currentFolder.id}
                        >
                            {currentFolder.name}
                        </option>
                    );
                })}
            </>
        );
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
        >
        {({
        isSubmitting,
        errors
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
                  <div className="col-md-12 d-flex justify-content-center">
                      <select name="parentFolderId" className="form-control w-50" onChange={e => setSelectedParentFolder(e.target.value)}>
                        {renderParentOptions()}
                      </select>
                  </div>
                </div>
                <div className="row">  
                  <div className="col-md-12 mt-1"><button className="btn btn-success" disabled={isSubmitting} type="submit">Save</button></div>
                </div>
            </Form>)}
        </Formik>
      );
}
