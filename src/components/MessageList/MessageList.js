import React, { useState } from 'react';
import Modal from '../Modal'
import Message from '../Message';

export default function MessageList({ messages }) {
    const [modalShow, setModalShow] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(null);

    const renderTitle = message => {
        return message.from && message.subject && `${message.from} - ${message.subject}` || '(No subject)';
    }

    const showMessage = message => {
        setCurrentMessage(message);
        setModalShow(true);
    }

    const renderMessageItems = () => {
        return messages && messages.messages && messages.messages.length ? (
            <>
                <ul className="list-group w-100 h-100">
                    {messages.messages.map(message => (
                        <div 
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
                        <Message message={currentMessage} />}
                    actions={<button className="btn btn-success" onClick={() => setModalShow(false)}>Close</button>}
                />
            </>) : (
                <div>No messages!</div>
            );
    }
  
    return renderMessageItems();
}
