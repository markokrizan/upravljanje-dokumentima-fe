import React, { useEffect } from 'react';
import AccountListItem from '../../components/AccountListItem';

export default function MyAccounts({ myAccounts, getMyAccounts}){
    useEffect(() => {
        getMyAccounts();
    }, []);

    const renderAccounts = () => myAccounts.length && myAccounts.map(account => {
        return <AccountListItem account={account} />;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12" >
                    <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
                        <h3>Accounts in use:</h3>
                        <button className="btn btn-success">+</button>
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