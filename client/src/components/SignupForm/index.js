import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';

import Auth from '../../utils/auth';

const SignupForm = () => {
const [formValues, setFormValues] = useState({username: "", email: "", password: "", ageVerified: ""});
const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false);
const [addUser, { error }] = useMutation(ADD_USER);

const submitHandler = async (e) => {
    e.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formValues }
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
};

// const validate = (values) => {
//     const errors = {};
//     //const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//     if(!values.username) {
//         errors.username = "Username is required!"
//     }
//     if(!values.password) {
//         errors.password = "Password is required!"
//     } else if (values.password.length < 4) {
//         errors.password = "Password must be more than 4 characters!"
//     } else if (values.password.length > 24) {
//         errors.password = "Password must be less than 24 characters!"
//     }
//     if(!values.email) {
//         errors.email = "Email is required!"
//     }
//     if(!values.confirmEmail) {
//         errors.confirmEmail = "Email is required!"
//     }
//     if(!values.verifyPassword) {
//         errors.verifyPassword = "Password is required!"
//     }
//     // if(!values.realName) {
//     //     errors.realName = "Real name is required!"
//     // }
//     if(!values.ageVerified) {
//         errors.ageVerified = "Must be over the age of 18 to register!"
//     }
//     // if(!values.phoneNumber) {
//     //     errors.phoneNumber = "Phone number is required!"
//     // }
//     if(values.password !== values.verifyPassword) {
//         errors.verifyPassword = "Password and verified password do not match!"
//     }
//     if(values.email !== values.confirmEmail) {
//         errors.confirmEmail = "Email and confirmed email do not match!"
//     }
//     return errors;
// };
 

    return (
        <div className="login-form">
        <form className="row" onSubmit={submitHandler}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
            <div className="col-auto">
                <h2 className="center">Create New Account</h2>
                {(error !="") ? ( <div className="error">{error}</div> ) : "" }
                <div>
                    <input type="username" name="username" id="username" placeholder="Username" required onChange={e => setFormValues({...formValues, username: e.target.value})} value={formValues.username} />
                    <p>{ formErrors.username }</p>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email" required onChange={e => setFormValues({...formValues, email: e.target.value})} value={formValues.email} />
                    <p>{ formErrors.email }</p>
                </div>
                {/* <div>
                    <input type="email" name="confirmEmail" id="confirmEmail" required placeholder="Confirm Email" onChange={e => setFormValues({...formValues, confirmEmail: e.target.value})} value={formValues.confirmEmail} />
                    <p>{ formErrors.confirmEmail }</p>
                </div> */}
                <div>
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={e => setFormValues({...formValues, password: e.target.value})} value={formValues.password} />
                    <p>{ formErrors.password }</p>
                </div>
                {/* <div>
                    <input type="password" name="verifyPassword" id="verifyPassword" required placeholder="Verify Password" onChange={e => setFormValues({...formValues, verifyPassword: e.target.value})} value={formValues.verifyPassword} />
                    <p>{ formErrors.verifyPassword }</p>
                </div> */}
                {/* <div>
                    <input type="realName" name="realName" id="realName" placeholder="Real Name" onChange={e => setFormValues({...formValues, realName: e.target.value})} value={formValues.realName} />
                    <p>{ formErrors.realName }</p>
                </div> */}
                {/* <div>
                    <input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={e => setFormValues({...formValues, phoneNumber: e.target.value})} value={formValues.phoneNumber} />
                    <p>{ formErrors.phoneNumber }</p>
                </div> */}
                <div>
                    <label className="verification-font" htmlFor="ageVerified">I confirm that I am over the age of 13:</label>
                    <input type="checkbox" name="ageVerified" id="ageVerified" required onChange={e => setFormValues({...formValues, ageVerified: true})} value={formValues.ageVerified} />
                    <p>{ formErrors.ageVerified }</p>
                </div>
                <div>
                <input className="btn btn-sm btn-light center" type="submit" value="Signup" />
                </div>
            </div>
            
        </form>
            {/* this below area can be deleted once sign ups are working */}
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div>Signed in successfully!</div>
                    ) : (
                        <pre> { } </pre>
                    )}
        </div>
    )
}

export default SignupForm;