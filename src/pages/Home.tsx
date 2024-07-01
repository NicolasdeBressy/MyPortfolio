import React from "react";
import Navbar from "../components/Navbar";
import TitleReveal from "../components/TitleReveal";
import Footer from "../components/Footer";
import "../styles/components/_TitleReveal.scss";
import "../styles/pages/_Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>

      <main>
        <section id="TitleReveal">
          <TitleReveal />
        </section>

        <section id="about" className="about-section">
          <p>
            Développeur web passionné, je crée des expériences numériques
            innovantes.
          </p>
        </section>

        <section id="skills" className="skills-section">
          <h2>Mes compétences</h2>
          <ul>
            <li>
              <i className="fab fa-react"></i>
            </li>
            <li>
              <i className="fab fa-js"></i>
            </li>
            <li>
              <i className="fab fa-sass"></i>
            </li>
            <li>
              <i className="fab fa-node-js"></i>
            </li>
            <li>
              <i className="fab fa-git-alt"></i>
            </li>
          </ul>
        </section>

        <section id="projects" className="projects-section">
          <h2>Mes projets</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>En construction</h3>
              <p>déso ça arrive bientot</p>
              <a href="#">Voir le projet</a>
            </div>
            <div className="project-card">
              <h3>Celui-ci aussi en construction</h3>
              <p>j'ai quelques idées</p>
              <a href="#">Voir le projet</a>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-section">
          <h2>Intéressé par mon travail ?</h2>
          <p>
            N'hésitez pas à consulter mon CV ou à me contacter pour discuter de
            vos projets.
          </p>
          <div className="cta-buttons">
            <a
              href="/documents/CV Nicolas de Bressy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Voir mon CV
            </a>
            <a href="/contact" className="cta-button">
              Me contacter
            </a>
          </div>
        </section>

        <section id="background" className="background-style"></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
