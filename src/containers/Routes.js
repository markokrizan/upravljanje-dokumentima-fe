import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import ProtectedComponent from './ProtectedComponent/ProtectedComponent';

import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home';
import NotFound from '../components/Pages/NotFound';
import About from '../components/Pages/About';
import ProtectedExample from './ProtectedComponent';



export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            {/* Example of auth - handle roles if needed in the ProtectedComponent HOC too */}
            <ProtectedComponent path="/protected-example" exact component={ProtectedExample}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/about" exact component={About} />
            <Route component={NotFound}/>
        </Switch>
    )
}