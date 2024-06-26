"use strict";
// Sélection de l'élément "Dons"
const donationLink = document.querySelector(".donation-link");
// Création de l'élément tooltip et de son image
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.style.display = "none"; // Caché par défaut
const image = document.createElement("img");
image.src = "./assets/img/bitcoin-adress.png"; // Chemin de l'image
image.alt = "adresse bitcoin"; // Texte alternatif
image.style.width = "130px";
image.style.height = "130px";
// Styles CSS pour le tooltip
tooltip.style.position = "absolute";
tooltip.style.top = "0";
tooltip.style.left = "0";
tooltip.style.padding = "8px";
tooltip.style.borderRadius = "25px";
tooltip.style.backgroundColor = "#fff";
tooltip.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
tooltip.style.zIndex = "1100";
// Ajout de l'image à tooltip et de tooltip à body
tooltip.appendChild(image);
document.body.appendChild(tooltip);
// Fonction pour mettre à jour la position du tooltip
function updateTooltipPosition() {
    if (donationLink) {
        const linkRect = donationLink.getBoundingClientRect();
        const scrollTop = window.scrollY; // Position de défilement verticale
        // Position juste en dessous de "Dons", ajustée pour le défilement
        tooltip.style.top = `${linkRect.bottom + scrollTop + 15}px`;
        tooltip.style.left = `${linkRect.left + linkRect.width / 2}px`; // Centré horizontalement
    }
}
// Gestion de l'événement de survol
donationLink === null || donationLink === void 0 ? void 0 : donationLink.addEventListener("mouseover", () => {
    updateTooltipPosition(); // Mettre à jour la position au survol
    tooltip.style.display = "block"; // Afficher le tooltip
});
// Gestion de l'événement de sortie de survol
donationLink === null || donationLink === void 0 ? void 0 : donationLink.addEventListener("mouseout", () => {
    tooltip.style.display = "none"; // Cacher le tooltip
});
// Écouter l'événement de scroll pour mettre à jour la position du tooltip si nécessaire
window.addEventListener("scroll", () => {
    if (tooltip.style.display === "block") {
        updateTooltipPosition();
    }
});
