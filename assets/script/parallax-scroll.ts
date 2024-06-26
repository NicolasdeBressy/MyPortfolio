// Sélection de l'élément "nav"
const nav = document.querySelector(".navbar") as HTMLElement;

// Fonction pour appliquer l'effet de parallaxe au défilement
function applyParallaxEffect() {
  const parallaxElements = document.querySelectorAll(
    ".parallax"
  ) as NodeListOf<HTMLElement>;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Gérer la classe 'scrolled' de la barre de navigation
    nav.classList.toggle("scrolled", scrollPosition > 10);

    // Appliquer l'effet de parallaxe aux éléments sélectionnés
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });
}

// Initialisation de l'effet de parallaxe
applyParallaxEffect();
