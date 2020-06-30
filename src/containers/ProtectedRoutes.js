import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import ProtectedComponent from './ProtectedComponent';
import Home from './Home';
import Folder from './Folder';
import SingleMessage from './SingleMessage';
import NotFound from '../components/NotFound';
import Contacts from './Contacts';
import MyAccounts from './MyAccounts';

export default function ProtectedRoutes(){
    return (
        <Switch>
            <ProtectedComponent path="/" exact component={Home} />
            <ProtectedComponent path="/(inbox|sent|spam|deleted)/" component={Folder} />
            <ProtectedComponent path="/message/:id" component={SingleMessage} />
            <ProtectedComponent path="/contacts" exact component={Contacts}/>
            <ProtectedComponent path="/my-accounts" exact component={MyAccounts}/>
            <Route component={NotFound}/>
        </Switch>
    )
}
