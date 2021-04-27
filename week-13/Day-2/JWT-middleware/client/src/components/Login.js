import { useState } from 'react'

function Login(props) {
    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
            const token = result.token
            localStorage.setItem('jsonwebtoken', token)
            localStorage.setItem('username', result.username)
            props.history.push('/profile')
            }
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type='text' placeholder='Enter username' name='username' onChange = {handleChange} />
            <input type='password' placeholder='Enter password' name='password' onChange = {handleChange} />
            <button onClick = {handleLogin}>Log In</button>
        </div>
    )
}

export default Login