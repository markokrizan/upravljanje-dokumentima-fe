import React, { useEffect, useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Modal from '../../components/Modal';
import './Contacts.css';
import SingleContact from '../../components/SingleContact';
import ContactListItem from '../../components/ContactListItem';

export default function Contacts({ getMyContacts, saveContact, contacts }){
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
      getMyContacts();
    }, [])

    const renderContacts = () => contacts.length && contacts.map(contact => {
      return (<ContactListItem 
          key={contact.id}
          contact={contact} 
          saveContact={saveContact}
          deleteContact={() => console.log('delete')}
      />)
    });

    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
            <div className="input-group w-50">
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search"/>
              <div className="input-group-append"><button className="btn btn-success" type="button"><i className="fa fa-search"></i></button></div>
            </div>
            <ButtonToolbar>
              <button className="btn btn-success"  onClick={() => setModalShow(true)}>+</button>

              <Modal
                show={modalShow}
                header={'Contact'}
                body={<SingleContact
                  saveContact={saveContact}
                  closeModal={() => setModalShow(false)}
                />}
                actions={<button className="btn btn-success" onClick={() => setModalShow(false)}>Close</button>}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          </div>
          <div className="row">
            <ul className="list-group w-100 h-100">
              {renderContacts() || <p>No contacts yet</p>}
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}
