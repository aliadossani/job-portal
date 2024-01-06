import { Link, NavLink } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <ul>
        <li>
          <Link to="/" className={classes.Link}>
            Home Page
          </Link>

          <Link to="/AddJob" className={classes.Link}>
            Add Job
          </Link>

          <Link to="/savedJobs" className={classes.Link}>
            Saved Jobs
          </Link>


          <Link to="/appliedJobs" className={classes.Link}>
            Applied Jobs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
