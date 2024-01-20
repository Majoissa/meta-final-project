import "../App.css";
import biglogo from "../images/biglogo.png";
function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <img src={biglogo} alt="footer logo" />
        <ul className="footerList">
          <li>DoorMat navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order online</li>
          <li>Login</li>
        </ul>
        <ul className="footerList">
          <li>Contact</li>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
        <ul className="footerList">
          <li>Social media links</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
