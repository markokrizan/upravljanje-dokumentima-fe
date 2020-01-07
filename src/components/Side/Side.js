import React from 'react';
import {Link} from 'react-router-dom';

export default function Side(){
    return (
      <div class="list-group m-0 p-0 w-100">
         <Link to="/inbox" class="list-group-item list-group-item-action">Inbox</Link>
         <Link to="/sent" class="list-group-item list-group-item-action">Sent</Link>
         <Link to="/spam" class="list-group-item list-group-item-action" >Spam</Link>
         <Link to="/deleted" class="list-group-item list-group-item-action">Deleted</Link>
      </div>
    );
}