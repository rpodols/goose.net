import React, { useState } from 'react';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Setlist from '../components/Setlist/index';

function MyAccount() {

    return (
        <><Header /><div className="My Account">
            <MyAccount/>
            <Setlist/>
        </div>
        <Footer />
        </>
    );
}

export default MyAccount;