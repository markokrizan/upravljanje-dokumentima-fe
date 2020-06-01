import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Header from '../../components/Header';
import Side from '../Side';
import ProtectedRoutes from '../ProtectedRoutes';
import PublicRoutes from '../PublicRoutes';

import './AppLayout.css';
 
export default function AppLayout({logOut, isLoggedIn, loggedInUser, getMe}) {

  useEffect(() => {
    isLoggedIn && getMe();
  }, [])
  
  return (
      <Router>
        <Fragment>
        <Header logOut = {logOut} loggedInUser = {loggedInUser}/>
        {!loggedInUser && <div className="public-area">
          <PublicRoutes/>
        </div>}
        {loggedInUser && <div className="row main-app-area">
          <aside className="col-md-2">
            <Side/>
          </aside>
          <main className="col-md-10">
            <ProtectedRoutes/>
          </main>
        </div>}
        </Fragment>
      </Router>
  );
}
