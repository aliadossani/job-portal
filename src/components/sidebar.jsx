import { Link, NavLink } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <ul>
        <li>
          <Link to="/" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i class="bi bi-house-door-fill fa-3x"></i>
              Home
            </div>
          </Link>

          <Link to="/AddJob" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i class="bi bi-plus-circle-fill fa-3x"></i>
              Add
            </div>
          </Link>

          <Link to="/savedJobs" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i class="bi bi-floppy-fill fa-3x"></i>
              Saved
            </div>
          </Link>


          <Link to="/appliedJobs" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i class="bi bi-bag-check-fill"></i>
              Applied
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
