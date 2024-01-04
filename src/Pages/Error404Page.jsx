import image from "../assets/error.avif";

const Error404Page = () => {
  return (
    <div className="cont-404">
      <img src={image} alt="No page found" />
    </div>
  );
};

export default Error404Page;
