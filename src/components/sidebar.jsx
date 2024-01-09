import { Link } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";

const sidebar = ({ isLoggedIn }) => {
  return (
    <div className={classes.sidebarContainer}>
      <ul>
        <li>
          <Link to="/" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i className="bi bi-house-door-fill fs3"></i>
              Home
            </div>
          </Link>

          {
            isLoggedIn &&
            <Link to="/AddJob" className={classes.link}>
              <div className={classes.sidebarLinks}>
                <i className="bi bi-plus-circle-fill fs3"></i>
                Add
              </div>
            </Link>
          }

          <Link to="/savedJobs" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i className="bi bi-floppy-fill fs3"></i>
              Saved
            </div>
          </Link>


          <Link to="/appliedJobs" className={classes.link}>
            <div className={classes.sidebarLinks}>
              <i className="bi bi-bag-check-fill fs3"></i>
              Applied
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
