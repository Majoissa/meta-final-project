import Nav from "./Nav";
import Header from "./Header";
import "../App.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Header />
        <Nav />
      </div>
    </>
  );
}

export default Navbar;
