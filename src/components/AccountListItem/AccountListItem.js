import React from 'react';

export default function AccountListItem ({account}) {
    return(
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            {account.username}
            <button className="btn btn-danger">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </li>);
};