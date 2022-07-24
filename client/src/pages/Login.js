import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/index';
import { Routes, Route, useNavigate } from 'react-router-dom';

function Login() {
    let loggedIn = false;
    const navigate = useNavigate();

    const navigateToHome  = () => {
        navigate('/');
    };

    const adminUser = {
        username: "admin",
        password: "admin",
        email: "admin@admin.com"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.username === adminUser.username && details.password === adminUser.password){
            console.log("Logged In!");
            setUser({
                username: details.username,
                email: details.email
            })
            navigateToHome();
            return loggedIn = true;
        } else {
            console.log("Username and password do not match any account!");
            setError("Username and password do not match any account!");
        }
    
    }

    const Logout = () => {
        console.log("Logout");
        setUser({ username: "", email: "" });
    }

    return (
        <div className="login">
            {(loggedIn) ? (
                <div>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        <script crossorigin src="..."></script>
        </div>
    );
}

export default Login;