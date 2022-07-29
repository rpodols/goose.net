import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const loggedIn = Auth.loggedIn();
    let isAdmin = false;
    if(loggedIn) {
      isAdmin = Auth.isAdmin();
    }
   

    return (
        <header>
            <div>
                <nav>
                    <div className="navigation">
                    {loggedIn ? (
                        <>
                          <div className="main-icon">
                            <Link className="nav-bar" to="/">goose.net</Link>
                          </div>
                          <div className="nav-container">
                          {isAdmin && (
                            <Link className="nav-bar" to="/myaccount">Add Setlist</Link>)
                          }
                            <Link className="nav-bar" to="/">Setlists</Link>
                            
                            <a className="nav-bar" href="/" onClick={logout}>Logout</a>
                          </div>
                        </>
                    ) : (
                        <>
                          <div className="main-icon">
                            <Link className="nav-bar" to="/">goose.net</Link>
                          </div>
                          <div className="nav-container">
                            <Link className="nav-bar" to="/login">Login</Link>
                            <Link className="nav-bar" to="/register">Register</Link>
                          </div>
                          
                        </>
                    )}
                    </div>
                </nav>
            </div>
        </header>
    )

};

export default Header;