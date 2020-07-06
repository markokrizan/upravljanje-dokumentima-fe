import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Side from '../Side';
import ProtectedRoutes from '../ProtectedRoutes';
import PublicRoutes from '../PublicRoutes';

import './AppLayout.css';
 
export default function AppLayout({logOut, isLoggedIn, loggedInUser, getMe}) {

  useEffect(() => {
    isLoggedIn && getMe();
  }, [])
  
  return (
      <Fragment>
        <Loader/>
        <Header logOut = {logOut} loggedInUser = {loggedInUser}/>
        <Router>
          <Fragment>
          {!isLoggedIn && <div className="public-area">
            <PublicRoutes/>
          </div>}
          {isLoggedIn && <div className="row main-app-area">
            <aside className="col-md-2" style={{height : "900px"}}>
              <Side/>
            </aside>
            <main className="col-md-10 pl-0">
              <ProtectedRoutes/>
            </main>
          </div>}
          </Fragment>
        </Router>
      </Fragment>
  );
}
