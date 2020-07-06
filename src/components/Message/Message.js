import React, { useState } from 'react'
import {Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';

import { capitalize, formatDate } from '../../util/helpers';

import './Message.css';


export default function Message({ message, editingEnabled, folders, saveMessage, setModalShow }) {
    if(!message || isEmpty(message)) {
        return (<div>Error rendering message! </div>)
    }

    const [ selectedFolderId, setSelectedFolderId ] = useState(null);

    const renderField = (fieldName, fieldType = 'text', render = null, error = false) => {
        const label = !render ? message[fieldName] : render(message[fieldName]);

        return editingEnabled ? (
            <Field 
                type={fieldType}
                name={fieldName} 
                placeholder={capitalize(fieldName)} 
                component={fieldName === 'content' ? 'textarea' : 'input'}
                className={`
                    form-control 
                    ${fieldName === 'content' ? 'w-100 h-100' : 'w-50'}
                    ${error ? 'border border-danger' : ''}
                `} 
            />
        ) : (
            <label className="wrap-content">{label}</label>
        );
    }

    const renderFolderSelect = () => {
        const availableFolders = folders.filter(folder => folder.id !== message.folder.id)

        return (
            <select 
                className="form-control w-50" 
                name="folderId" 
                onChange={e => setSelectedFolderId(e.target.value)}
            >
                <option value=""> Select folder </option>
                {availableFolders.map(folder => <option value={folder.id}>{folder.name}</option>)}
            </select>
        );
    }

    const initialValues = {
        from : '',
        to : '',
        cc : '', 
        bcc : '', 
        subject : '',
        read : false,
        ...message,
        folderId : message.folder && message.folder.id ? message.folder.id : null
    }

    const validationSchema = Yup.object().shape({
        from: Yup.string().nullable(),
        to: Yup.string().nullable(),
        cc: Yup.string().nullable(),
        bcc: Yup.string().nullable(),
        dateTime: Yup.date().typeError("Must be a date").nullable().default(null),
        subject: Yup.string().nullable(),
        folderId: Yup.number().nullable()
      });

    const handleSubmit = (values, { setErrors, setSubmitting }) => {
        const data = { ...values, folderId: parseInt(selectedFolderId) || message.folder.id }

        saveMessage(data, setModalShow);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                isSubmitting,
                errors
            }) =>
                (<Form>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>From:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderField('from')}
                            {errors.from && <p>{errors.from}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>To:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderField('to')}
                            {errors.to && <p>{errors.to}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Cc:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderField('cc')}
                            {errors.cc && <p>{errors.cc}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Bcc:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderField('bcc')}
                            {errors.bcc && <p>{errors.bcc}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Date:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderField('dateTime', 'text', value => formatDate(value), errors.dateTime)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Subject:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderField('subject')}
                            {errors.subject && <p>{errors.subject}</p>}
                        </div>
                    </div>
                    <div className="row content-container">
                        <div className="col-md-12 border content-container">{renderField('content', 'textarea')}</div>
                        {errors.content && <p>{errors.content}</p>}
                    </div>
                    {editingEnabled &&  <div className="row">
                        <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Folder:</label></div>
                        <div className="col-md-6 d-flex justify-content-start">
                            {renderFolderSelect()}
                            {errors.folderId && <p>{errors.folderId}</p>}
                        </div>
                    </div>}
                    {editingEnabled && <div className="text-center m-2">
                            <button type="submit" className="btn btn-success">Save</button>
                    </div>}
                </Form>
            )}
        </Formik>
    )
}
