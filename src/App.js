import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Section>
        <Article></Article>
        <Article></Article>
        <Article></Article>
      </Section>
      <Footer />
    </>
  );
}

export default App;
