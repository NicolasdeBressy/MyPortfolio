"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.words = exports.introText = void 0;
// Sélection de l'élément "introText"
const introText = document.querySelector("#description h1");
exports.introText = introText;
if (!introText) {
    throw new Error("L'élément #description h1 n'a pas été trouvé.");
}
// Récupération des mots du texte introductif
const words = Array.from(introText.childNodes)
    .map((node) => node.nodeName === "SPAN"
    ? node.innerText
    : node.nodeName === "BR"
        ? "\n"
        : "")
    .filter((word) => word !== "");
exports.words = words;
