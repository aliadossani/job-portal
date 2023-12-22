import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/login" element={<LoginPage />}>Login</Link>
        </div>
    );
}

export default HomePage
