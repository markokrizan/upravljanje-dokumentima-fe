import React from 'react'
import { isEmpty } from 'lodash';

import './Message.css';

export default function Message({ message }) {
    if(!message || isEmpty(message)) {
        return (<div>Error rendering message! </div>)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>From:</label></div>
                <div className="col-md-6 d-flex justify-content-start">
                    <label>{message.from && message.from}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>To:</label></div>
                <div className="col-md-6 d-flex justify-content-start">
                    <label>{message.to && message.to}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Cc:</label></div>
                <div className="col-md-6 d-flex justify-content-start">
                    <label>{message.cc && message.cc}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Bcc:</label></div>
                <div className="col-md-6 d-flex justify-content-start">
                    <label>{message.bcc && message.bcc}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Date:</label></div>
                <div className="col-md-6 d-flex justify-content-start">
                    <label>{message.dateTime && message.dateTime}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Subject:</label></div>
                <div className="col-md-6 d-flex justify-content-start">
                    <label>{message.subject && message.subject}</label>
                </div>
            </div>
            <div className="row content-container">
                <div className="col-md-12 border">{message.content && message.content || 'No content'}</div>
            </div>
        </div>
    )
}
