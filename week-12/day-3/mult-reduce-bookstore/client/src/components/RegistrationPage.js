import React, { useState } from 'react'
import '../css/RegistrationPage.css'

function RegistrationPage(props) {

    const [user, setUser] = useState({})

    const handleSave = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = () => {
        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    console.log('Registered!')
                    props.history.push('/')
                }
            })
    }

    return (
        <div class = 'registration-display'>
            <h1>Register With Us!</h1>
            <br />
            <input type="text" onChange={handleSave} placeholder="Choose a username" name="username" />
            <br /><br />
            <input type="password" onChange={handleSave} placeholder="Choose a password" name="password" /><br /><br />
            <input type="text" onChange={handleSave} placeholder="Enter your email" name="email" />
            <br /><br />
            <button class = 'button' onClick={register}>Register</button>
        </div>
    )
}

export default RegistrationPage