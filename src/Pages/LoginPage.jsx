import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/LoginPage.module.css";

const LoginPage = ({ setIsLoggedIn, setUserEmail, isLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (username === "admin@admin.com" && password === "admin") {
            setIsLoggedIn(true);
            setUserEmail(username);
            navigate("/");

        } else {
            alert("Please enter a valid email and Password");
        }

    }
    return (
        <form onSubmit={handleSubmit} className={classes.loginCtn}>

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