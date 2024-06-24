// Sélection de l'élément "introText"
const introText = document.querySelector("#description h1") as HTMLElement;

// Récupération des mots du texte introductif
const words = Array.from(introText.childNodes)
  .map((node) =>
    node.nodeName === "SPAN"
      ? (node as HTMLElement).innerText
      : node.nodeName === "BR"
      ? "\n"
      : ""
  )
  .filter((word) => word);

// Fonction pour révéler les mots progressivement
function revealWords(i: number = 0) {
  if (i < words.length) {
    setTimeout(() => {
      // Ajout des mots avec une animation
      introText.innerHTML +=
        words[i] === "\n" ? "<br />" : `<span class="word">${words[i]}</span> `;
      revealWords(i + 1);
    }, 5);
  } else {
    // Animation d'opacité pour chaque mot révélé
    introText.querySelectorAll(".word").forEach((span, index) => {
      setTimeout(() => {
        (span as HTMLElement).style.opacity = "1";
      }, (index + 1) * 100);
    });
  }
}

// Initialisation de l'affichage des mots
introText.innerHTML = "";
revealWords();
