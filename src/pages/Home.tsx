import React from "react";
import Navbar from "../components/Navbar";
import TitleReveal from "../components/TitleReveal";
import Footer from "../components/Footer";
import "../styles/components/_TitleReveal.scss";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <section id="TitleReveal">
        <TitleReveal />
      </section>

      <section id="background" className="background-style"></section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
