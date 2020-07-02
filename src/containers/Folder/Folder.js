import React, { useEffect, useState }  from 'react';

import { useParams} from "react-router";
import { debounce, isEmpty } from 'lodash';

import MessageList from '../../components/MessageList';
import Loader from '../../components/Loader';

import { findFolderByName } from '../../util/helpers';

export default function Folder({ 
    defaultAccount, 
    folders, 
    syncFolder, 
    getMessages, 
    messages,
    isLoading
}){
    const params = useParams();
    const [folder, setFolder] = useState(null);

    const getRefreshIcon = () => {
        return folder && folder.isSynced ? 'fa fa-check' : 'fa fa-refresh';
    }

    const handleGetMessages = query => {
        !isEmpty(folder) && getMessages({
            accountId: defaultAccount.id,
            folderId: folder.id,
            query
        })
    }

    const handleSyncFolder = () => {
        syncFolder({
            accountId: defaultAccount.id,
            folderId: folder.id
        })
    }

    const searchMessages = debounce(query => handleGetMessages(query), 500);

    useEffect(() => {
        setFolder(findFolderByName(folders, params['folderName']));
    }, [params, folders])

    useEffect(() => {
        if(folder) {
            handleGetMessages(null);
        }
    }, [folder]);

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
                    <div className="input-group w-25">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inlineFormInputGroup" 
                            placeholder="Search"
                            onChange={e => searchMessages(e.target.value ? e.target.value : null)}
                        />
                    </div>
                    <button 
                        className="btn btn-success" 
                        disabled={(folder && folder.isSynced) || isLoading}
                        onClick={handleSyncFolder}
                    >
                        <i className={getRefreshIcon()}></i>
                    </button>
                </div>
            </div>
            <MessageList messages={messages}/>
        </>
      )
}
