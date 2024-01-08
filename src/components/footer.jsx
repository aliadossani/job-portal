import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footerCtn}>
            <div className={classes.footerElements}>
                <div className={classes.aboutUsLink}>
                    <Link to="/about"> About us</Link>
                </div>
                {/* <div>
                    <Link to="">Terms and Conditions</Link>
                </div> */}
                <div className={classes.githubLink}>
                    <Link to="https://github.com/aliadossani/job-portal">Connect with Us</Link>
                </div>
            </div>

        </footer>
    );
}

export default Footer;