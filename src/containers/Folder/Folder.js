import React, { useEffect }  from 'react';

import { useParams} from "react-router";
import { debounce, isEmpty } from 'lodash';

import MessageList from '../../components/MessageList';

import { findFolderByName } from '../../util/helpers';

export default function Folder({ defaultAccount, folders, syncFolder, getMessages, messages }){
    const params = useParams();

    const handleGetMessages = query => {
        const folder = findFolderByName(folders, params['folderName']);

        !isEmpty(folder) && getMessages({
            accountId: defaultAccount.id,
            folderId: folder.id,
            query
        })
    }

    const searchMessages = debounce(query => handleGetMessages(query), 500);

    useEffect(() => {
        if(folders && folders.length) {
            handleGetMessages(null);
        }
    }, [folders]);

    useEffect(() => {
        if(folders && folders.length) {
            handleGetMessages(null);
        }
    }, [params]);

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
                    <button className="btn btn-success"><i className="fa fa-refresh"></i></button>
                </div>
            </div>
            <MessageList messages={messages}/>
        </>
      )
}
