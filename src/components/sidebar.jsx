import { Link, NavLink } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <ul>
        <li>
          <NavLink to="/" className={classes.NavLink}>
            Home Page
          </NavLink>

          <Link to="/AddJob" className={classes.Link}>
            Add Job
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
