import React from 'react';
import AccountForm from '../AccountForm';

export default function SingleAccount({account, saveAccount, closeModal}){
    return(
      <div className="card-body">
        <AccountForm 
          account={account} 
          saveAccount={saveAccount}
          closeModal={closeModal}
        />
      </div>
    )
}
