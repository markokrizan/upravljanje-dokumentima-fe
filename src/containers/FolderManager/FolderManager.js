import React, { useState } from 'react';

import FolderList from '../../components/FolderList';
import FolderForm from '../../components/FolderForm';

const FolderManager = ({ account, folders, saveFolder }) => {
    const [selectedFolder, setSelectedFolder] = useState(null);

    return (
        <>
            <p>Current folders:</p>
            <FolderList 
                folders={folders} 
                editingEnabled={true}
                setSelectedFolder={setSelectedFolder}
            />

            <br/>

            <p>Add new folder:</p>
            <FolderForm 
                saveFolder={saveFolder} 
                account={account} 
                folder={selectedFolder}
            />
        </>
    );
}

export default FolderManager;
