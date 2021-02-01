import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const authObject = { 'Project-ID': '7a2e4e9d-c5c5-4859-b4cc-40c5c3dbe27e', 'User-Name': username, 'User-Secret': password };
        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (err) {
            setError('Oops, incorrect credentials.');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">zirco-chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} className="input" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
                    <input type="password" value={password} className="input" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;