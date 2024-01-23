import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../images/🦆 icon _hamburger menu.svg";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={menu} alt="burger menu" />
      </div>
      <ul className={`navBar ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/BookingPage">Reservations</Link>
        </li>
        <li>
          <a href="App.js">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
