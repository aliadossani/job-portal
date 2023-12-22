import { useState } from "react";
// import { useHistory } from 'react-router-dom';


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const username = event.target.elements.username.value;
        // const password = event.target.elements.password.value;

        // username === "alia@gmail.com" && password === "1234" ? history.push('/') : alert('Invalid username! Please enter a valid username and password');
        console.log("Success");

    }
    return (
        <form onSubmit={handleSubmit}>

            <label>Email:
                <input type="email" name="email" value={username} onChange={(event) => setUsername(event.target.value)} required />
            </label>
            <label>Password:
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </label>
            <button type="submit">Login</button>

        </form>

    );
}

export default LoginPage;