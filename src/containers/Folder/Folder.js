import React, { useEffect, useState }  from 'react';

import { useParams} from "react-router";
import { debounce, isEmpty } from 'lodash';

import MessageList from '../../components/MessageList';
import Sort from '../../components/Sort';
import { findFolderByName, parseSort } from '../../util/helpers';

export default function Folder({ 
    defaultAccount, 
    folders, 
    syncFolder, 
    getMessages, 
    messages,
    isLoading,
    saveMessage
}){
    const params = useParams();
    const [folder, setFolder] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [query, setQuery] = useState(null);
    const [currentSort, setCurrentSort] = useState(null);

    const sortItems = [
        {
            fieldName : 'subject',
            fieldDirection : 'asc'
        },
        {
            fieldName : 'subject',
            fieldDirection : 'desc'
        },
        {
            fieldName : 'from',
            fieldDirection : 'asc'
        },
        {
            fieldName : 'from',
            fieldDirection : 'desc'
        },
        {
            fieldName : 'dateTime',
            fieldDirection : 'asc'
        },
        {
            fieldName : 'dateTime',
            fieldDirection : 'desc'
        }
    ];

    const getRefreshIcon = () => {
        return folder && folder.isSynced ? 'fa fa-check' : 'fa fa-refresh';
    }

    const handleGetMessages = (passedPage) => {
        const page = passedPage || passedPage === 0 ? passedPage : currentPage;

        !isEmpty(folder) && getMessages({
            accountId: defaultAccount.id,
            folderId: folder.id,
            query,
            page,
            sort : currentSort
        })
    }

    const handleSyncFolder = () => {
        syncFolder({
            accountId: defaultAccount.id,
            folderId: folder.id
        })
    }

    const searchMessages = debounce(query => {
        setQuery(query);
    }, 500);

    useEffect(() => {
        setFolder(findFolderByName(folders, params['folderName']));
    }, [params, folders])

    useEffect(() => {
        if(folder) {
            handleGetMessages(null);
        }
    }, [folder, currentPage]);

    useEffect(() => {
        handleGetMessages(0);
    }, [query]);

    const handleChangeSort = value => {
        setCurrentSort(parseSort(value));
    }

    useEffect(() => {
        if(currentSort) {
            handleGetMessages();
        }
    }, [currentSort])

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
                    <div className="input-group w-50">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inlineFormInputGroup" 
                            placeholder="Search"
                            onChange={e => searchMessages(e.target.value ? e.target.value : null)}
                        />
                        {!query && <Sort
                            sortItems={sortItems}
                            handleChangeSort={handleChangeSort}
                        />}
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
            <MessageList 
                messages={messages}
                folders={folders}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                saveMessage={saveMessage}
            />
        </>
      )
}
