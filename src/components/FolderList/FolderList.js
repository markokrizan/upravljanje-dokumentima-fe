import React from 'react';
import { Link } from 'react-router-dom';

const FolderList = ({ folders }) => {
    const renderFolders = () => {  
        return folders.map(folder => {
          return (
            <Link to={`/${folder.name}`} className="list-group-item list-group-item-action">{folder.name}</Link>
          );
        })
      }

    return (
        <div className="list-group m-0 p-0 w-100">
            {folders.length ? renderFolders() : <p>No folders yet!</p> }
        </div>
    );
}

export default FolderList;
