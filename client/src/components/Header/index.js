import React from 'react';
import { Link } from 'react-router-dom';

//import Auth from '../../utils/auth';

const Header = () => {
    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    return (
        <header>
            <div>
                <nav>
                    <div className="navigation">
                    <Link className="nav-bar" to="/">goose.net</Link>
                    <Link className="nav-bar" to="/login">Login</Link>
                    <Link className="nav-bar" to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )

};

export default Header;