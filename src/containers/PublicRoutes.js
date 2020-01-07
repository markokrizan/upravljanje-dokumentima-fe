import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Login from './Auth/Login';
import Register from './Auth/Register';

export default function ProtectedRoutes(){
    return (
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route component={Login}/>
        </Switch>
    );
}