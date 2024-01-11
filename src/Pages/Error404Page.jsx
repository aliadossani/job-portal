import image from "../assets/Error404.jpeg";
import classes from "../styles/Error404Page.module.css";

const Error404Page = () => {
  return (
    <div className={classes.errorScreen}>
      <img src={image} alt="No page found" />
    </div>
  );
};

export default Error404Page;
