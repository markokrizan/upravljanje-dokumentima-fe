import React, { useState } from 'react';
import ContactForm from '../ContactForm';

export default function SingleContact({
  contact,
  saveContact,
  closeModal
}){
  const [photo, setPhoto] = useState(null); 
  //const [source, setSource] = useState('');

  const onFileUpload = event => {
    const [file] = event.currentTarget.files;
    setPhoto(file);
  };

  const handleSaveContact = (formData, setErrors) => {
    saveContact({photo, ...formData}, setErrors);
  }

  return(
    <div className="card-body">
      <div class="col-md-12 d-flex justify-content-center">
        <img class="d-block" src="https://static.pingendo.com/img-placeholder-1.svg" width="150" height="150"/>
      </div>
      <input 
        type="file" 
        accept="image/*"
        onChange={event => {
          const [file] = event.target.files;
          //setSource(URL.createObjectURL(file));
          onFileUpload(event);
        }}
      />
      <ContactForm 
        contact={contact} 
        saveContact={handleSaveContact}
        closeModal={closeModal}
      />
    </div>
  )
}
