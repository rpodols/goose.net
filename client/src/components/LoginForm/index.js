import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function LoginForm({ Login }) {
const [details, setDetails] = useState({username: "", email: "", password: ""});
const [login, { error }] = useMutation(LOGIN_USER);

const submitHandler = async (e) => {
    e.preventDefault();

    Login(details);

    try {
        const { data } = await login({
            variables: { ...details },
        });

        Auth.login(data.login.token);
    } catch (e) {
        console.error(e);
    }

    setDetails({
        username: "",
        email: "",
        password: "",
    });
};

    return (
        <div className="login-form">
        <form className="row gy-2 gx-3 align-items-center" onSubmit={submitHandler}>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
            <div className="col-auto">
                <h2 className="center">Login</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="username" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                </div>
                {/* <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div> */}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input className="btn btn-sm btn-light center" type="submit" value="Login" />
                {(error !="") ? ( <div className="error">{error}</div> ) : "" }
            </div>
        </form>
        <script crossorigin src="..."></script>
        </div>
    )
}

export default LoginForm