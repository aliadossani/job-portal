import { Link } from "react-router-dom";
import PortalLogo from "../assets/PortalLogo.png";
import classes from "../styles/Navbar.module.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn, userEmail }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img className={classes.logo} src={PortalLogo} />
          </Link>
        </div>
      </div>

      <div className={classes.navElements}>
        {
          isLoggedIn
            ?
            <div className={classes.loginCtn}>
              <p>{userEmail}</p>
              <a onClick={() => setIsLoggedIn(false)}>Log out</a>
            </div>
            :
            <Link to="/login">Admin Login</Link>
        }
      </div>

    </nav >
  );
};

export default Navbar;
