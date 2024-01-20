import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Products />
      <TestimonialsSection />
      <About />
      <Footer />
    </>
  );
}

export default App;
