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
          <h2>À propos de moi</h2>
          <p>
            Passionné de développement web, je crée des expériences numériques
            innovantes. Avec une solide expérience en React et TypeScript, je
            suis constamment à la recherche de nouveaux défis.
          </p>
        </section>

        <section id="skills" className="skills-section">
          <h2>Mes compétences</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>SCSS</li>
            <li>Node.js</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projects" className="projects-section">
          <h2>Projets récents</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>nom du projet</h3>
              <p>description du projet</p>
              <a href="#">Voir le projet</a>
            </div>
            <div className="project-card">
              <h3>nom du projet</h3>
              <p>description du projet</p>
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
