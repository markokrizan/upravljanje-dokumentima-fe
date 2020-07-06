import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import Modal from '../Modal'
import Message from '../Message';
import Pagination from '../../components/Pagination';
import { parseSearchResultField } from '../../util/helpers';

export default function MessageList({ messages, currentPage, setCurrentPage }) {
    const [modalShow, setModalShow] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(null);

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
                <Pagination 
                    prevPage={() => setCurrentPage(currentPage - 1)}
                    nextPage={() => setCurrentPage(currentPage + 1)}
                    currentPage={currentPage}
                    totalPages={messages.totalPages}
                />

                <Modal
                    show={modalShow}
                    header={'Message'}
                    body={
                        <Message message={currentMessage} />}
                    actions={<button className="btn btn-success" onClick={() => setModalShow(false)}>Close</button>}
                    onHide={() => setModalShow(false)}
                />
            </>) : (
                <div className="w-100 text-center">No messages!</div>
            );
    }
  
    return renderMessageItems();
}
