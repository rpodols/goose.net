import React, { useState } from 'react';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Setlist from '../components/Setlist/index';
function User() {

    return (
        <><Header /><div className="signup">
            <User/>
            <Setlist/>
        </div><Footer /></>
    );
}

export default User;