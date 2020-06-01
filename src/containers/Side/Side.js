import React, { useEffect, useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';

import Modal from '../../components/Modal';
import FolderForm from '../../components/FolderForm';
import FolderList from '../../components/FolderList';
import { getDefaultUserAccount } from '../../util/helpers';

export default function Side({ folders, defaultAccount, loggedInUser, getFolders, saveFolder }){
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
            <button className="btn btn-success"  onClick={() => setShowFolderModal(true)}>+</button>

            <Modal
              show={showFolderModal}
              header={'New Folder'}
              body={<FolderForm
                saveFolder={saveFolder}
                account={defaultAccount}
                setShowFolderModal={setShowFolderModal}
              />}
              actions={<button className="btn btn-success" onClick={() => setShowFolderModal(false)}>Close</button>}
              onHide={() => setShowFolderModal(false)}
            />
          </ButtonToolbar>
        </div> : <p>Create or set a default email account to add new folders!</p>}
      </div>
    );
}
