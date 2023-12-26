import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img className={classes.logo} src={logo} />
          </Link>
        </div>
        <div className={classes.searchSelect}>
          <select>
            <option value="" disabled hidden selected>
              Job Role
            </option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backened Developer">Backened Developer</option>
            <option value="Andriod Developer">Andriod Developer</option>
            <option value="iOS Developer">iOS Developer</option>
          </select>
          <select>
            <option value="" disabled hidden selected>
              Work-Mode
            </option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select>
            <option value="" disabled hidden selected>
              Experience
            </option>
            <option value="Fresher">Fresher</option>
            <option value="Junior">Junior</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
          </select>
          <select>
            <option value="" disabled hidden selected>
              JobType
            </option>
            <option value="Full-time">Fresher</option>
            <option value="Part-time">Junior</option>
            <option value="Contract">Mid-level</option>
          </select>
          <div>
            {/* <input type="text" placeholder="Search" />*/}
            <button className="Button" type="button">
              Search
            </button>
          </div>
        </div>

        <div className={classes.navElements}>
          <Link to="/login">LogIn</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
