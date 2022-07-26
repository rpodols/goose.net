import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function LoginForm(props) {
const [details, setDetails] = useState({username: "", password: ""});
const [login, { error }] = useMutation(LOGIN_USER);

const submitHandler = async (e) => {
    e.preventDefault();

    //login(details);
    console.log(1);
    try {
        console.log(4);
        const { data } = await login({
            variables: { ...details },
        });
        console.log(2);
        Auth.login(data.login.token);
        console.log(5);
    } catch (e) {
        console.log(3);
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
                {/* <div>
                    <input type="username" name="username" id="username" placeholder="Username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                    <p></p>
                </div> */}
                <div>
                    <input type="email" name="email" id="email" placeholder="Email" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                    <p></p>
                </div>
                <div>
                <input className="btn btn-sm btn-light center" type="submit" value="Login" />
                {(error !="") ? ( <div className="error">{error}</div> ) : "" }
                </div>
            </div>
        </form>
        <script crossorigin src="..."></script>
        </div>
    )
}

export default LoginForm;