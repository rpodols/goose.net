import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/index';

function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged In!");
            setUser({
                username: details.username,
                email: details.email
            });
        } else {
            console.log("Details do not match!");
            setError("Details do not match!");
        }
    
    }

    const Logout = () => {
        console.log("Logout");
        setUser({ username: "", email: "" });
    }

    return (
        <div className="login">
            {(user.email !="") ? (
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}

        </div>
    );
}

export default Login;