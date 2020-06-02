import React from 'react';
import { Link } from 'react-router-dom';

const FolderList = ({ folders, editingEnabled, setSelectedFolder }) => {
    const renderFolderListItem = folder => {
      if(!editingEnabled) {
        return (
          <Link key={folder.id} to={`/${folder.name}`} className="list-group-item list-group-item-action">{folder.name}</Link>
        );
      }

      return (
        <div 
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          key={folder.id}
        >
          <span>{folder.name}</span>
          <span>
                <button className="btn btn-warning" onClick={() => setSelectedFolder(folder)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button className="btn btn-danger" onClick={() => console.log('delete')}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </span>
        </div>
      )
    }

    const renderFolders = () => folders.map(folder => renderFolderListItem(folder));
        
    return (
        <div className="list-group m-0 p-0 w-100">
            {folders && folders.length ? renderFolders() : <p>No folders yet!</p> }
        </div>
    );
}

export default FolderList;
