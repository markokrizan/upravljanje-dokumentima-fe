import React, { useEffect, useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { debounce } from 'lodash';

import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import './Contacts.css';
import SingleContact from '../../components/SingleContact';
import ContactListItem from '../../components/ContactListItem';

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

    const renderContacts = () => contacts && contacts.content && contacts.content.map(contact => {
      return (<ContactListItem 
          key={contact.id}
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
                {renderContacts() || <p>No contacts yet</p>}
              </ul>
              <Pagination 
                    prevPage={() => setCurrentPage(currentPage - 1)}
                    nextPage={() => setCurrentPage(currentPage + 1)}
                    currentPage={currentPage}
                    totalPages={contacts.totalPages}
                />
            </div>
          </div>
        </div>
      </div>
    );
}
