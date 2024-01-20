import "./Image.css";

const Images = ({ direction, description }) => {
  return <img className="image-comp" src={direction} alt={description} />;
};

export default Images;
