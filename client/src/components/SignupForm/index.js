import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function SignupForm({ props }) {
const [formValues, setFormValues] = useState({username: "", email: "", password: ""});
const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false);
const [addUser, { error }] = useMutation(ADD_USER);

const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //Signup(formValues);
    if (setIsSubmit) {
        try {
            console.log(1);
            console.log(formValues);
            const data = {
                token: "82397492840238423",
                user: {
                    _id: "9304892304832",
                    username: 'Bill'
                }
              }
              console.log(data);
            // const { data } = await addUser({
            //     variables: { ...formValues }
            // });

            Auth.login(data.token);
        } catch (e) {
            console.error(e);
        }
    }
};

useEffect(() => {
    console.log(formErrors);
    {
        console.log(formValues);
    }
}, [formErrors]);

const validate = (values) => {
    const errors = {};
    //const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(!values.username) {
        errors.username = "Username is required!"
    }
    if(!values.password) {
        errors.password = "Password is required!"
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters!"
    }
    if(!values.email) {
        errors.email = "Email is required!"
    }
    return errors;
};

    return (
        <div className="login-form">
        <form className="row gy-2 gx-3 align-items-center" onSubmit={submitHandler}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
            <div className="col-auto">
                <h2 className="center">Create New Account</h2>
                {(error !="") ? ( <div className="error">{error}</div> ) : "" }
                <div>
                    <label htmlFor="">Username:</label>
                    <input type="username" name="username" id="username" onChange={e => setFormValues({...formValues, username: e.target.value})} value={formValues.username} />
                    <p>{ formErrors.username }</p>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setFormValues({...formValues, email: e.target.value})} value={formValues.email} />
                    <p>{ formErrors.email }</p>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setFormValues({...formValues, password: e.target.value})} value={formValues.password} />
                    <p>{ formErrors.password }</p>
                </div>
                <input className="btn btn-sm btn-light center" type="submit" value="Signup" />
                
            </div>
            
        </form>
            {/* this below area can be deleted once sign ups are working */}
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div>Signed in successfully!</div>
                    ) : (
                        <pre> { JSON.stringify(formValues, undefined, 2) } </pre>
                    )}
        </div>
    )
}

export default SignupForm;