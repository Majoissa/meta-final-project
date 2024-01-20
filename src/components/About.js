import "../App.css";
import TitleText from "./generals/TitleText";
import Images from "./generals/Images";
import fish from "../images/fish.jpg";
import pasta from "../images/pasta.jpg";

const About = () => {
  return (
    <>
      <section className="About-us">
        <div className="info-container">
          <TitleText text="Little Lemon" color="#495E57" />
          <h2>Chicago</h2>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. We are family owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist.
          </p>
        </div>
        <div className="images-container">
          <div className="about-image1">
            <Images direction={fish} description="Fish dish" />
          </div>
          <div className="about-image2">
            <Images direction={pasta} description="Pasta dish" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
