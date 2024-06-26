import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/components/_Navigation.scss";
import "../styles/components/_Footer.scss";

const About: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div style={{ marginBottom: "100px" }}></div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
