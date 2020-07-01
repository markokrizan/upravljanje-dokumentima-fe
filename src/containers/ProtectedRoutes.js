import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ProtectedComponent from './ProtectedComponent';
import Folder from './Folder';
import SingleMessage from './SingleMessage';
import NotFound from '../components/NotFound';
import Contacts from './Contacts';
import MyAccounts from './MyAccounts';

export default function ProtectedRoutes(){
    return (
        <Switch>
            <Redirect exact from="/" to="/my-accounts" />
            <ProtectedComponent path="/folder/:folderName" component={Folder} />
            <ProtectedComponent path="/message/:id" component={SingleMessage} />
            <ProtectedComponent path="/contacts" exact component={Contacts}/>
            <ProtectedComponent path="/my-accounts" exact component={MyAccounts}/>
            <Route component={NotFound}/>
        </Switch>
    )
}
