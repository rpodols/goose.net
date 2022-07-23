import React, { useState, useEffect } from 'react';

function SignupForm({ Signup, error }) {
const [formValues, setFormValues] = useState({username: "", email: "", password: ""});
const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false);

const submitHandler = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //Signup(formValues);
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
        <div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>Signed in successfully!</div>
            ) : (
                <pre> { JSON.stringify(formValues, undefined, 2) } </pre>
            )}
        <form onSubmit={submitHandler}>
            <div>
                <h2>Signup:</h2>
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
                <input type="submit" value="Signup" />
            </div>
        </form>
        </div>
    )
}

export default SignupForm;