import React from 'react';
import { Link } from 'react-router-dom';

export default function MessageList({ messages }) {
    const renderTitle = message => {
        return message.from && message.subject && `${message.from} - ${message.subject}` || '(No subject)';
    }

    const renderMessageItems = () => {
        return messages && messages.messages && messages.messages.length ? (
            <ul className="list-group w-100 h-100">
                {messages.messages.map(message => (
                    <Link 
                        to={`/message/${message.id}`}
                        className="
                            list-group-item 
                            list-group-item-action 
                            d-flex 
                            justify-content-between 
                            align-items-center"
                    >
                        {renderTitle(message)}
                    </Link>
                ))}
            </ul>) : (
                <div>No messages!</div>
            );
    }
  
    return renderMessageItems();
}
