import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/project_php/login_process.php', {
    username,
    password,
});

            if (response.data.status === 'success') {
                // Redirect to the dashboard or perform any other action on successful login
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
