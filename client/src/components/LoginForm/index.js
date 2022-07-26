import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function LoginForm(props) {
const [details, setDetails] = useState({email: "", password: ""});
const [login, { error }] = useMutation(LOGIN_USER);

const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const { data } = await login({
            variables: { ...details },
        });
        Auth.login(data.login.token);
    } catch (e) {
        console.error(e);
    }

    setDetails({
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
                {/* <div>
                    <input type="username" name="username" id="username" placeholder="Username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                    <p></p>
                </div> */}
                <div>
                    <input type="email" name="email" id="email" placeholder="Email" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <p></p>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                    <p></p>
                </div>
                <div>
                <input className="btn btn-sm btn-light center" type="submit" value="Login" />
                </div>
            </div>
        </form>
        {error && <div>Incorrect credentials, please retry or create an account.</div>}
        <script crossorigin src="..."></script>
        </div>
    )
}

export default LoginForm;