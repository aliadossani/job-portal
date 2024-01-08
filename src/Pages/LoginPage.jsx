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
        <div className={classes.mainWrapper}>
            <div className={classes.header}>
                <h1 className={classes.headLine}>
                    Login
                </h1>
                <p className={classes.subTitle}>Find the job made for you!</p>
            </div>
            <form onSubmit={handleSubmit} className={classes.loginCtn}>
                <div className={classes.emailPassCtn}>
                    <label>
                        <input type="email" name="email" placeholder="Email" value={username} onChange={(event) => setUsername(event.target.value)} required />
                    </label>
                </div>
                <br />
                <div className={classes.emailPassCtn}>
                    <label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </label>
                </div>
                <br />
                <div className={classes.submitBtnCtn}>
                    <input type="submit" value="Log in" />
                </div>
            </form>
        </div>
    );
}

export default LoginPage;