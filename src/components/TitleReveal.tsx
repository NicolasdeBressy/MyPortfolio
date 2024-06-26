import React, { useEffect } from "react";

const TitleReveal: React.FC = () => {
  useEffect(() => {
    const introText = document.querySelector("#TitleReveal h1") as HTMLElement;

    const words = Array.from(introText.childNodes)
      .map((node) =>
        node.nodeName === "SPAN"
          ? (node as HTMLElement).innerText
          : node.nodeName === "BR"
          ? "\n"
          : ""
      )
      .filter((word) => word);

    function revealWords(i: number = 0) {
      if (i < words.length) {
        setTimeout(() => {
          introText.innerHTML +=
            words[i] === "\n"
              ? "<br />"
              : `<span class="word">${words[i]}</span> `;
          revealWords(i + 1);
        }, 5);
      } else {
        introText.querySelectorAll(".word").forEach((span, index) => {
          setTimeout(() => {
            (span as HTMLElement).style.opacity = "1";
          }, (index + 1) * 100);
        });
      }
    }

    introText.innerHTML = "";
    revealWords();
  }, []);

  return (
    <h1 id="TitleReveal">
      <span className="word">Développeur</span>
      <span> front-end,</span>
      <br />
      <span className="word">Javascript/React.</span>
      <br />
      <span className="word">Je</span>
      <span className="word"> donne</span>
      <span className="word"> vie</span>
      <br />
      <span className="word">à</span>
      <span className="word"> vos</span>
      <span className="word"> projets !</span>
    </h1>
  );
};

export default TitleReveal;
