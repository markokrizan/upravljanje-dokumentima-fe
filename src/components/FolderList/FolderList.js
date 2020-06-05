import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './FolderList.css';

const FolderList = ({ folders, editingEnabled, setSelectedFolder, deleteFolder, account }) => {
    const history = useHistory();

    const getNestWidthPercentage = level => `${100 / level}%`;

    const renderFolderListItem = (folder, nestingLevel) => {
      return (
          <div 
            className={`
              list-group-item 
              list-group-item-action 
              text-overflow-elipsis
              ${nestingLevel > 1 && 'align-right'}
            `}
            style={ nestingLevel > 1 ? { width: `${getNestWidthPercentage(nestingLevel)}` } : {}}
            key={folder.id}
            onClick={() => history.push(folder.name) }
          >
            {editingEnabled ? (
              <div className="d-flex justify-content-between align-items-center">
                <span>{folder.name}</span>
                <span>
                      <button className="btn btn-warning" onClick={() => setSelectedFolder(folder)}>
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteFolder({ accountId: account.id, folderId: folder.id })}>
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                      </button>
                </span>
              </div>
            ) : (
              <Link key={folder.id} to={`/${folder.name}`} className={'text-overflow-elipsis'}>
                {folder.name}
              </Link>
            )}
          </div>
      )
    }

    const renderFolders = () => folders.map(folder => {
      let nestLevel = 1;

      return (
        <>
          {!folder.parentFolder && renderFolderListItem(folder, nestLevel)}
          {folder.subFolders && folder.subFolders.map(subFolder => {
            return (
              <>
                {!folder.parentFolder && renderFolderListItem(subFolder, ++nestLevel)}
                {subFolder.subFolders && subFolder.subFolders.map(subFolderChild => renderFolderListItem(subFolderChild, ++nestLevel))}
              </>
            )
          })}
        </>
      );
    });

    return (
        <div className="list-group m-0 p-0 w-100">
            {folders && folders.length ? renderFolders() : <p>No folders yet!</p> }
        </div>
    );
}

export default FolderList;
