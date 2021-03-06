import React, { useState } from 'react';

import FolderList from '../../components/FolderList';
import FolderForm from '../../components/FolderForm';

const FolderManager = ({ account, folders, saveFolder, deleteFolder }) => {
    const [selectedFolder, setSelectedFolder] = useState(null);

    return (
        <>
            <p>Current folders:</p>
            <FolderList 
                folders={folders} 
                editingEnabled={true}
                setSelectedFolder={setSelectedFolder}
                deleteFolder={deleteFolder}
                account={account}
            />

            <br/>

            <p>Add or edit folder:</p>
            <FolderForm 
                saveFolder={saveFolder} 
                account={account} 
                folder={selectedFolder}
                folders={folders}
            />
        </>
    );
}

export default FolderManager;
