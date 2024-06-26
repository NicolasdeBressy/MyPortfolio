import React from "react";
import { Link } from "react-router-dom";
import ParallaxScroll from "./ParallaxScroll";
import HoverBitcoin from "./HoverBitcoin";
import "../styles/components/_Navigation.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ParallaxScroll />
      <ul className="nav-left">
        <li className="logo">
          <Link to="/">
            <img
              src={require("../assets/img/letter-n_15090711.png")}
              alt="logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/cv">Mon CV</Link>
        </li>
        <li>
          <Link to="/contact">Me contacter</Link>
        </li>
        <li>
          <Link to="/about">À propos de moi</Link>
        </li>
        <HoverBitcoin />
      </ul>
      <ul className="nav-right">
        <li>
          <a
            href="https://github.com/NicolasdeBressy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicolas-de-bressy-181849303/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
