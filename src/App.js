import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Navbar />
      <Fade cascade damping={0.2}>
        <Main />
        <Products />
        <TestimonialsSection />
        <About />
      </Fade>
      <Footer />
    </>
  );
}

export default App;
