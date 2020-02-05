import React from 'react';
import AccountForm from '../AccountForm';

export default function SingleAccount({account}){
    return(
      <div className="card-body">
        <AccountForm account={account}/>
      </div>
    )
}
