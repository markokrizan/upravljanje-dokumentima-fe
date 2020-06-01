import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({logOut, loggedInUser}){

    const renderUser = () => loggedInUser && `${loggedInUser.firstName} ${loggedInUser.lastName}`;

    return (
        <div>
            <nav className="navbar navbar-light border-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <h2>FTN Mail Client</h2>
                    </Link>
                    {loggedInUser && <Dropdown alignRight>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <p>{renderUser()}</p>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/contacts">Contacts</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/my-accounts">My Accounts</Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => logOut()}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
            </nav>
        </div>
    );
}
