import React from 'react';
import MyAccount from '../components/MyAccount/index';
import SetlistForm from '../components/SetlistForm/index';
import Setlist from '../components/Setlist/index';
import Auth from '../utils/auth';

function MyAccountPage() {
    
    const loggedIn = Auth.loggedIn();
    const loggedOut = !loggedIn;
    let isAdmin = false;
    if(loggedIn) {
      isAdmin = Auth.isAdmin();
    }


    return (
        <div>
            <MyAccount />
       
         
            {isAdmin && (
                <SetlistForm />
            )}
        </div>
    );
}

export default MyAccountPage;