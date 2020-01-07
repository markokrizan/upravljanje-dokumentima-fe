import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({logOut, loggedInUser}){

    const renderUser = () => loggedInUser && `${loggedInUser.first_name} ${loggedInUser.last_name}`;

    return (
        <div>
            <nav class="navbar navbar-light border-dark">
                <div class="container-fluid">
                    <Link to='/' class="navbar-brand" href="#">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <h2>Mail App</h2>
                    </Link>
                    {loggedInUser && <Dropdown alignRight>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/contacts">Contacts</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/my-accounts">My Accounts</Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
            </nav>
        </div>
    );
}
