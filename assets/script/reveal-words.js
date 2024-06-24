"use strict";
// Sélection de l'élément "introText"
const introText = document.querySelector("#description h1");
// Récupération des mots du texte introductif
const words = Array.from(introText.childNodes)
    .map((node) => node.nodeName === "SPAN"
    ? node.innerText
    : node.nodeName === "BR"
        ? "\n"
        : "")
    .filter((word) => word);
// Sélection de l'élément "nav"
// const nav = document.querySelector(".navbar") as HTMLElement;
// Écoute de l'événement de scroll pour gérer la classe 'scrolled' de la barre de navigation
window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
});
// Fonction pour révéler les mots progressivement
function revealWords(i = 0) {
    if (i < words.length) {
        setTimeout(() => {
            introText.innerHTML +=
                words[i] === "\n" ? "<br />" : `<span class="word">${words[i]}</span> `;
            revealWords(i + 1);
        }, 5);
    }
    else {
        introText.querySelectorAll(".word").forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = "1";
            }, (index + 1) * 100);
        });
    }
}
// Initialisation de l'affichage des mots
introText.innerHTML = "";
revealWords();
