import React, { useEffect, useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';

import Modal from '../../components/Modal';
import FolderManager from '../FolderManager';
import FolderList from '../../components/FolderList';

export default function Side({ folders, defaultAccount, loggedInUser, getFolders }){
    const [showFolderModal, setShowFolderModal] = useState(false);
  
    useEffect(() => {
      if(defaultAccount) {
        getFolders({ accountId: defaultAccount.id });
      }
    }, [defaultAccount]);

    return (
      <div className="text-center">
        {folders.length ? <FolderList folders={folders}/> : <p>No folders yet!</p>}
        {defaultAccount ? <div className='d-flex align-items-center flex-column mt-1'>
          <ButtonToolbar >
            <button className="btn btn-warning"  onClick={() => setShowFolderModal(true)}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>

            <Modal
              show={showFolderModal}
              header={'Manage folder structure'}
              body={<FolderManager account={defaultAccount}/>}
              actions={<button className="btn btn-success" onClick={() => setShowFolderModal(false)}>Close</button>}
              onHide={() => setShowFolderModal(false)}
            />
          </ButtonToolbar>
        </div> : <p>Create or set a default email account to add new folders!</p>}
      </div>
    );
}
