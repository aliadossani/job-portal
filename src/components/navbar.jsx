import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import classes from "../styles/Navbar.module.css";

const Navbar = ({ isLoggedIn, userEmail }) => {
  return (
    <nav className={classes.navbar}>

      <div className={classes.container}>
        <div>
          <Link to="/"><img className={classes.logo} src={logo} /></Link>
        </div>
        <div className={classes.navElements}>
          {
            isLoggedIn
              ?
              <p>{userEmail}</p>
              :
              <Link to="/login">LogIn</Link>
          }
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
