import React, { useEffect, useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { debounce } from 'lodash';

import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import './Contacts.css';
import SingleContact from '../../components/SingleContact';
import ContactListItem from '../../components/ContactListItem';
import { MESSAGE_DEFAULT_PER_PAGE, CONTACT_DEFAULT_PER_PAGE } from '../../util/constants';

export default function Contacts({ getMyContacts, saveContact, deleteContact, contacts }){
    const [modalShow, setModalShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [query, setQuery] = useState(null);

    useEffect(() => {
      getMyContacts();
    }, [])

    const handleGetContacts = passedPage => {
      const page = passedPage || passedPage === 0 ? passedPage : currentPage;

      getMyContacts({
        query,
        page
      });
    }

    const searchContacts = debounce(query => {
      setQuery(query);
    }, 500);

    useEffect(() => {
      handleGetContacts(null);
    }, [currentPage]);

    useEffect(() => {
      handleGetContacts(0);
    }, [query]);

    const contactsPresent = contacts && contacts.content && contacts.content.length > 0;

    const renderContacts = () => contacts.content.map(contact => {
      return (<ContactListItem 
          key={contact.model.id}
          contact={contact} 
          saveContact={saveContact}
          deleteContact={deleteContact}
      />)
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
              <div className="input-group w-25">
                <input 
                  type="text" 
                  className="form-control" 
                  id="inlineFormInputGroup" 
                  placeholder="Search"
                  onChange={e => searchContacts(e.target.value ? e.target.value : null)}
                />
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
                {contactsPresent && renderContacts()}
                {!contactsPresent && <div className="w-100 text-center">No contacts!</div>}
              </ul>
              {contactsPresent && contacts.content.length >= CONTACT_DEFAULT_PER_PAGE && <Pagination
                    prevPage={() => setCurrentPage(currentPage - 1)}
                    nextPage={() => setCurrentPage(currentPage + 1)}
                    currentPage={currentPage}
                    totalPages={contacts.totalPages}
                />}
            </div>
          </div>
        </div>
      </div>
    );
}
