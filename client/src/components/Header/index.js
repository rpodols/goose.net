import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const loggedIn = Auth.loggedIn();

    return (
        <header>
            <div>
                <nav>
                    <div className="navigation">
                    {loggedIn ? (
                        <>
                            <Link className="nav-bar" to="/">goose.vet</Link>
                            <Link className="nav-bar" to="/myaccount">My Account</Link>
                            <a className="nav-bar" href="/" onClick={logout}>Logout</a>
                        </>
                    ) : (
                        <>
                            <Link className="nav-bar" to="/">goose.net</Link>
                            <Link className="nav-bar" to="/login">Login</Link>
                            <Link className="nav-bar" to="/register">Register</Link>
                        </>
                    )}
                    </div>
                </nav>
            </div>
        </header>
    )

};

export default Header;