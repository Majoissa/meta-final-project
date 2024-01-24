import Button from "./generals/Button";
import "../App.css";
import food from "../images/restauranfood.jpg";
import TitleText from "./generals/TitleText";
import Images from "./generals/Images";
import { Link } from "react-router-dom";
function Main() {
  return (
    <>
      <main>
        <section class="container">
          <article className="fill">
            <TitleText text="Little Lemon" color="#F4CE14" />
            <h2>Chicago</h2>
            <p>
              We are family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/BookingPage">
              <Button text="Reserve a table" />
            </Link>
          </article>
          <article className="fill img">
            <Images direction={food} description="Food little lemon" />
          </article>
        </section>
      </main>
    </>
  );
}

export default Main;
