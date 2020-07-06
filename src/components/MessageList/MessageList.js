import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import Modal from '../Modal'
import Message from '../Message';
import Pagination from '../../components/Pagination';
import { parseSearchResultField } from '../../util/helpers';
import { MESSAGE_DEFAULT_PER_PAGE } from '../../util/constants';

export default function MessageList({ messages, currentPage, setCurrentPage, folders, saveMessage }) {
    const [modalShow, setModalShow] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(null);
    const [editingEnabled, setEditingEnabled] = useState(false);

    const renderTitle = message => {
        if (isEmpty(message)) {
            return '';
        }

        const isRead = !message.isRead ? '(New)' : '';
        const messageFrom = parseSearchResultField(message, 'from');
        const messageSubject = parseSearchResultField(message, 'subject');

        const title =  `${messageFrom} - ${messageSubject}` || '(No subject)';

        return (
            <p>
                <strong>{isRead}</strong>&nbsp;
                <span dangerouslySetInnerHTML={{__html: title}} />
            </p>
        );
    }

    const showMessage = message => {
        setCurrentMessage(message);
        setModalShow(true);
    }

    const toggleEdit = () => setEditingEnabled(!editingEnabled);

    const closeModal = () => {
        setEditingEnabled(false);
        setModalShow(false)
    }

    const renderMessageItems = () => {
        return messages && messages.content && messages.content.length ? (
            <>
                <ul className="list-group w-100">
                    {messages.content.map(message => (
                        <div 
                            key={message.model && message.model.id}
                            onClick={() => showMessage(message.model)}
                            className="
                                list-group-item 
                                list-group-item-action 
                                d-flex 
                                justify-content-between 
                                align-items-center"
                        >
                            {renderTitle(message)}
                        </div>
                    ))}
                </ul>
                {messages.content.length >= MESSAGE_DEFAULT_PER_PAGE && <Pagination 
                    prevPage={() => setCurrentPage(currentPage - 1)}
                    nextPage={() => setCurrentPage(currentPage + 1)}
                    currentPage={currentPage}
                    totalPages={messages.totalPages}
                />}

                <Modal
                    show={modalShow}
                    header={'Message'}
                    body={
                        <Message 
                            message={currentMessage} 
                            editingEnabled={editingEnabled}
                            folders={folders}
                            saveMessage={saveMessage}
                        />
                    }
                    actions={
                        <>
                            <button className="btn btn-success" onClick={toggleEdit}>{ !editingEnabled ? 'Edit' : 'Done' }</button>
                            <button className="btn btn-success" onClick={closeModal}>Close</button>
                        </>
                    }
                    onHide={closeModal}
                />
            </>) : (
                <div className="w-100 text-center">No messages!</div>
            );
    }
  
    return renderMessageItems();
}
