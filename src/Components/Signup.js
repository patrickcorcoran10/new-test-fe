import React, { useState } from "react";
import Auth from "../utils/auth";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [addUser] = useMutation(ADD_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass, name);


        const response = await addUser({
            variables: {
                "username": name,
                "email": email,
                "password": pass
            }
        });

        const token = response.data.addUser.token;

        Auth.login(token)


        // fetch('http://localhost:3001/graphql', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ query: `mutation { addUser(email: "${email}", password: "${pass}", username: "${name}") { token } }` })
        // }).then(res => res.json()).then(data => { console.log(data)
        //     window.location.pathname='/login'
        //  })
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch()}>Already have an account? Login here.</button>
        </div>
    )
}

