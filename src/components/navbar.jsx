import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <img className="logo" src={logo} />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <Link to="/LogIn">LogIn</Link>
            </li>
            <li>
              <Link to="/SignIn">SignIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
