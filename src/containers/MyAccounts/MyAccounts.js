import React, { useEffect } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import AccountListItem from '../../components/AccountListItem';
import SingleAccount from '../../components/SingleAccount';
import Modal from '../../components/Modal';

export default function MyAccounts({ myAccounts, getMyAccounts}){
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        getMyAccounts();
    }, []);

    const renderAccounts = () => myAccounts.length && myAccounts.map(account => {
        return <AccountListItem account={account} />;
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12" >
                    <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
                        <h3>Accounts in use:</h3>
                        <ButtonToolbar>
                            <button class="btn btn-success"  onClick={() => setModalShow(true)}>+</button>

                            <Modal
                                show={modalShow}
                                header={'New Account'}
                                body={<SingleAccount/>}
                                actions={<button onClick={() => setModalShow(false)}>Close</button>}
                                onHide={() => setModalShow(false)}
                            />
                        </ButtonToolbar>
                    </div>
                    <div className="row">
                        <ul className="list-group w-100 h-100" >
                            {renderAccounts() || <p>No accounts yet!</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}