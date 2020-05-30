import React, { useState } from 'react';
import SingleContact from '../../components/SingleContact';
import Modal from '../../components/Modal';

export default function ContactListItem ({
    contact, 
    saveContact, 
    deleteContact 
}) {
    const [modalShow, setModalShow] = useState(false);

    const closeModal = (e) => {
        setModalShow(false);
    }

    return(
       <li 
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
            <span>{contact.displayName}</span>
            <span>
                <button className="btn btn-warning" onClick={() => setModalShow(true)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </span>
            <Modal
                show={modalShow}
                header={'Contact'}
                body={
                    <SingleContact 
                        contact={contact} 
                        saveContact={saveContact}
                        closeModal={closeModal}
                    />}
                actions={<button className="btn btn-success" onClick={closeModal}>Close</button>}
            />
        </li> 
    );
};
