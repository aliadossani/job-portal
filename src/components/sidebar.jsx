import { NavLink } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
