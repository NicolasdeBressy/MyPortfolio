import React, { useEffect } from "react";
import "../styles/components/_Tooltip.scss"; // Importer les styles SCSS

const HoverBitcoin: React.FC = () => {
  useEffect(() => {
    const donationLink = document.querySelector(
      ".donation-link"
    ) as HTMLElement | null;

    if (!donationLink) return;

    // Création de l'élément tooltip et de son image
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip"; // Utilisation de la classe SCSS pour le tooltip

    const image = document.createElement("img");
    image.src = require("../assets/img/bitcoin-adress.png"); // Chemin de l'image
    image.alt = "adresse bitcoin"; // Texte alternatif
    image.className = "tooltip-img"; // Classe pour l'image

    // Ajout de l'image à tooltip
    tooltip.appendChild(image);
    document.body.appendChild(tooltip);

    // Fonction pour mettre à jour la position du tooltip
    const updateTooltipPosition = () => {
      const linkRect = donationLink.getBoundingClientRect();
      const scrollTop = window.scrollY; // Position de défilement verticale

      // Position juste en dessous de "Dons", ajustée pour le défilement
      tooltip.style.top = `${linkRect.bottom + scrollTop + 15}px`;
      tooltip.style.left = `${linkRect.left + linkRect.width / 2}px`; // Centré horizontalement
    };

    // Gestion de l'événement de survol
    const handleMouseEnter = () => {
      updateTooltipPosition(); // Mettre à jour la position au survol
      tooltip.style.display = "block"; // Afficher le tooltip
    };

    // Gestion de l'événement de sortie de survol
    const handleMouseLeave = () => {
      tooltip.style.display = "none"; // Cacher le tooltip
    };

    donationLink.addEventListener("mouseover", handleMouseEnter);
    donationLink.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("scroll", () => {
      if (tooltip.style.display === "block") {
        updateTooltipPosition();
      }
    });

    return () => {
      donationLink.removeEventListener("mouseover", handleMouseEnter);
      donationLink.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <li className="donation-link">
      Dons
      <i className="fab fa-bitcoin"></i>
    </li>
  );
};

export default HoverBitcoin;
