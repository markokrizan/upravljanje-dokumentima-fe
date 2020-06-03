import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import './SingleContact.css';

import { getLastContactPhoto } from '../../util/helpers';

const DEFAULT_PLACEHODER = 'https://static.pingendo.com/img-placeholder-1.svg';

export default function SingleContact({
  contact,
  saveContact,
  closeModal
}){
  const [photo, setPhoto] = useState(null); 
  const [source, setSource] = useState('');

  const onFileUpload = event => {
    const [file] = event.currentTarget.files;
    setPhoto(file);
  };

  const handleSaveContact = (formData, setErrors) => {
    saveContact({photo, ...formData}, setErrors);
  }

  return(
    <div className="card-body">
      <div className="col-md-12 d-flex upload-container">
        <img className="d-block" src={source || getLastContactPhoto(contact) || DEFAULT_PLACEHODER} width="150" height="150"/>
        <input 
        type="file" 
        className="form-control-file file-input"
        accept="image/*"
        onChange={event => {
          const [file] = event.target.files;
          setSource(URL.createObjectURL(file));
          onFileUpload(event);
        }}
      />
      </div>
      <ContactForm 
        contact={contact} 
        saveContact={handleSaveContact}
        closeModal={closeModal}
      />
    </div>
  )
}
