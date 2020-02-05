import React, { useState } from 'react';
import SingleAccount from '../../components/SingleAccount';
import Modal from '../../components/Modal';

export default function AccountListItem ({account}) {
    const [modalShow, setModalShow] = useState(false);

    const closeModal = (e) => {
        e.stopPropagation();
        setModalShow(false);
    }

    return(
        <li 
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
            <span>{account.username}</span>
            <span>
                <button className="btn btn-warning" onClick={() => setModalShow(true)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button className="btn btn-danger">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </span>
            <Modal
                show={modalShow}
                header={'Account'}
                body={<SingleAccount account={account}/>}
                actions={<button onClick={closeModal}>Close</button>}
            />
        </li>
    );
};