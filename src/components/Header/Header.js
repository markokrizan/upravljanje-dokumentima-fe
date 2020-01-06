import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Header({logOut, loggedInUser}){

    const renderUser = () => loggedInUser && `${loggedInUser.first_name} ${loggedInUser.last_name}`;

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">eSports Prophet</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to = "/" className="nav-link">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/protected-example" className="nav-link">Protected Route</Link>
                    </li>
                </ul>
                <span className="m-1 text-light">{renderUser()}</span>
                {!loggedInUser && <Link to="/login" className="btn btn-primary mr-1" >Login</Link>}
                {!loggedInUser && <Link to="/register" className="btn btn-primary">Register</Link>}
                {loggedInUser && <button className="btn btn btn-primary" onClick = {() => logOut()}>Logout</button>}
                </div>
            </nav>
            </header>);
        }