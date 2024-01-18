import "../App.css";
import { useState } from "react";
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
          <a href="App.js">Home</a>
        </li>
        <li>
          <a href="App.js">About</a>
        </li>
        <li>
          <a href="App.js">Menu</a>
        </li>
        <li>
          <a href="App.js">Reservations</a>
        </li>
        <li>
          <a href="App.js">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
