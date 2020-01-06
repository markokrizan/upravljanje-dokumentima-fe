import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Header from '../../components/Header';
import Side from '../../components/Side';
import Footer from '../../components/Footer';
import Routes from '../Routes';

import './AppLayout.css';


export default function AppLayout({logOut, isLoggedIn, loggedInUser, getMe}) {

  useEffect(() => {
    isLoggedIn && getMe();
  }, [])
  
  return (
      <Router>
        <Fragment>
        <Header logOut = {logOut} loggedInUser = {loggedInUser}/>
        <div className="row">
          <aside className="col-md-2">
            <Side/>
          </aside>
          <main className="col-md-8">
            <Routes/>
          </main>
          <aside className="col-md-2">
            <Side/>
          </aside>
        </div>
        <Footer/>
        </Fragment>
      </Router>
  );
}
