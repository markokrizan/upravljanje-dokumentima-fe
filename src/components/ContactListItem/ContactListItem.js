import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import SingleContact from '../../components/SingleContact';
import Modal from '../../components/Modal';

import './ContactListItem.css';

import { getLastContactPhoto, parseSearchResultField } from '../../util/helpers';

export default function ContactListItem ({
    contact, 
    saveContact, 
    deleteContact 
}) {
    const [modalShow, setModalShow] = useState(false);

    const closeModal = (e) => {
        setModalShow(false);
    }

    const renderTitle = contact => {
        if (isEmpty(contact)) {
            return '';
        }

        const firstName = parseSearchResultField(contact, 'firstName');
        const lastName = parseSearchResultField(contact, 'lastName');
        const email = parseSearchResultField(contact, 'email');

        const title =  `${firstName} ${lastName} - ${email}`

        return <span dangerouslySetInnerHTML={{__html: title}} />
    }

    return(
       <li 
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
            <span>
                {getLastContactPhoto(contact.model) && <img src={getLastContactPhoto(contact.model)} className="contact-list-image"></img>}
                {renderTitle(contact)}
            </span>
            <span>
                <button className="btn btn-warning" onClick={() => setModalShow(true)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button className="btn btn-danger" onClick={() => deleteContact(contact.model.id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </span>
            <Modal
                show={modalShow}
                header={'Contact'}
                body={
                    <SingleContact 
                        contact={contact.model ? contact.model : contact} 
                        saveContact={saveContact}
                        closeModal={closeModal}
                    />}
                actions={<button className="btn btn-success" onClick={closeModal}>Close</button>}
                onHide={closeModal}
            />
        </li> 
    );
};
