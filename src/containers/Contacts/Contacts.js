import React, { useEffect } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Modal from '../../components/Modal';
import './Contacts.css';
import SingleContact from '../../components/SingleContact';
import ContactListItem from '../../components/ContactListItem';

export default function Contacts({ getMyContacts, saveContact, contacts }){
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
      getMyContacts();
    }, [])

    const renderContacts = () => contacts.length && contacts.map(contact => {
      return (<ContactListItem 
          contact={contact} 
          saveContact={saveContact}
          deleteContact={() => console.log('delete')}
      />)
    });

    return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
            <div class="input-group w-50">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search"/>
              <div class="input-group-append"><button class="btn btn-success" type="button"><i class="fa fa-search"></i></button></div>
            </div>
            <ButtonToolbar>
              <button class="btn btn-success"  onClick={() => setModalShow(true)}>+</button>

              <Modal
                show={modalShow}
                header={'Contact'}
                body={<SingleContact
                  saveContact={saveContact}
                  closeModal={() => setModalShow(false)}
                />}
                actions={<button class="btn btn-success" onClick={() => setModalShow(false)}>Close</button>}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          </div>
          <div class="row">
            <ul class="list-group w-100 h-100">
              {renderContacts() || <p>No contacts yet</p>}
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}
