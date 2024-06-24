// Sélection de l'élément "introText"
const introText = document.querySelector("#description h1") as HTMLElement;

// Vérifie si l'élément introText a été correctement sélectionné
if (!introText) {
  throw new Error("L'élément #description h1 n'a pas été trouvé."); // Lance une erreur si l'élément n'est pas trouvé
}

// Récupération des mots du texte introductif
const words: string[] = Array.from(introText.childNodes) // Convertit les enfants de introText en un tableau
  .map((node: Node) =>
    node.nodeName === "SPAN" // Si le nœud est un <span>, récupère son texte
      ? (node as HTMLElement).innerText
      : node.nodeName === "BR" // Si le nœud est un <br>, ajoute un saut de ligne
      ? "\n"
      : ""
  )
  .filter((word: string) => word !== ""); // Filtre les éléments vides du tableau de mots

export { introText, words }; // Exporte introText (élément h1) et words (tableau de mots) pour une utilisation dans d'autres fichiers
