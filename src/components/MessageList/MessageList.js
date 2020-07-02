import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import Modal from '../Modal'
import Message from '../Message';
import { parseSearchResultField } from '../../util/helpers';

export default function MessageList({ messages }) {
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
        return messages && messages.length ? (
            <>
                <ul className="list-group w-100 h-100">
                    {messages.map(message => (
                        <div 
                            key={message.id}
                            onClick={() => showMessage(message)}
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
                <Modal
                    show={modalShow}
                    header={'Message'}
                    body={
                        <Message message={currentMessage && currentMessage.model} />}
                    actions={<button className="btn btn-success" onClick={() => setModalShow(false)}>Close</button>}
                    onHide={() => setModalShow(false)}
                />
            </>) : (
                <div>No messages!</div>
            );
    }
  
    return renderMessageItems();
}
