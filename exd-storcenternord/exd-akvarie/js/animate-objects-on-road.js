"use strict";

/* Lyd når en boble klikkes */
function handleBubbleClick(event) {
  const bubbleSound = new Audio("exd-akvarie/sound/bubble-pop.mp3");
  bubbleSound.play();
}

/* Lyd når skattekisten klikkes */
function handleSkattekisteClick(event) {
  const skattekisteSound = new Audio("exd-akvarie/sound/skattekiste-sound.mp3");
  skattekisteSound.play();
}

/* Lyd når piratskibet klikkes */
function piratClick(event) {
  const piratSound = new Audio("exd-akvarie/sound/pirat-sound.mp3");
  piratSound.play();
}

/* Når siden er klar */
document.addEventListener("DOMContentLoaded", () => {
  /* Klik på bobler */
  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubble.addEventListener("click", handleBubbleClick);
  });

  /* Klik på skattekisten */
  const skattekiste = document.getElementById("skattekiste");
  if (skattekiste) {
    skattekiste.addEventListener("click", handleSkattekisteClick);
  }

  /* Klik på piratskibet */
  const piratskib = document.getElementById("piratskib");
  if (piratskib) {
    piratskib.addEventListener("click", piratClick);
  }

  /* Play-knap til spil */
  const playBtn = document.getElementById("play-button");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      window.location.href = "../index-spil.html";
    });
  }

  /* Tooltip-boblen */
  const tooltip = document.getElementById("tooltip");

  /* Funktion til at vise boblen */
  function showTooltip(html) {
    if (tooltip) {
      tooltip.innerHTML = html;
      tooltip.classList.add("is-visible");

      setTimeout(() => {
        tooltip.classList.remove("is-visible");
      }, 10000);
    }
  }

  /* Fiskeinfo – alle oplysninger på dansk */
  const fiskeInfo = [
    {
      FiskeNavn: "Gul kirurgfisk",
      FiskeFarve: "Gul",
      FiskeLevested: "Stillehavet",
      FiskeLaengde: "20 cm",
      FiskeSpiser: "Alger",
    },
    {
      FiskeNavn: "Dværgkejserfisk",
      FiskeFarve: "Orange/sort",
      FiskeLevested: "Australien & Indonesien",
      FiskeLaengde: "19 cm",
      FiskeSpiser: "Alger",
    },
    {
      FiskeNavn: "Paletkirurgfisk",
      FiskeFarve: "Blå/sort/gul",
      FiskeLevested: "Stillehavet",
      FiskeLaengde: "31 cm",
      FiskeSpiser: "Alger",
    },
    {
      FiskeNavn: "Klovnefisk",
      FiskeFarve: "Orange/hvid",
      FiskeLevested: "Indiske Ocean",
      FiskeLaengde: "8 cm",
      FiskeSpiser: "Mikroalger",
    },
    {
      FiskeNavn: "Pudsefisk",
      FiskeFarve: "Blå/hvid/sort",
      FiskeLevested: "Indiske Ocean",
      FiskeLaengde: "11 cm",
      FiskeSpiser: "Parasitter",
    },
    {
      FiskeNavn: "Hvidstrubet kirugfisk",
      FiskeFarve: "Blå/gul/hvid",
      FiskeLevested: "Indonesien",
      FiskeLaengde: "30 cm",
      FiskeSpiser: "Alger",
    },
    {
      FiskeNavn: "Pincetfisk",
      FiskeFarve: "Hvid/gul/orange",
      FiskeLevested: "Indiske Ocean",
      FiskeLaengde: "20 cm",
      FiskeSpiser: "Små dyr",
    },
    {
      FiskeNavn: "Sortbåndet kirugfisk",
      FiskeFarve: "Hvid/sort",
      FiskeLevested: "Indiske Ocean",
      FiskeLaengde: "11 cm",
      FiskeSpiser: "Alger",
    },
  ];

  /* Sammenkobling mellem navne og HTML-id'er */
  const classMap = {
    "Gul kirurgfisk": "gul-kirurgfisk",
    Dværgkejserfisk: "dvaergkejserfisk",
    Paletkirurgfisk: "paletkirurgfisk",
    Klovnefisk: "klovnfisk",
    Pudsefisk: "pudsefisk",
    "Hvidstrubet kirugfisk": "hvidstrubet-kirurgfisk",
    Pincetfisk: "pincetfisk",
    "Sortbåndet kirugfisk": "sortbaandet-kirurgfisk",
  };

  /* Klik på fiskene og vis info */
  fiskeInfo.forEach((fisk) => {
    const elementId = classMap[fisk.FiskeNavn];
    if (!elementId) return;

    document.querySelectorAll("#" + elementId).forEach((elem) => {
      elem.addEventListener("click", () => {
        const tekst = `
          <div class="fish-info">
            <h2 class="fish-title">${fisk.FiskeNavn}</h2>
            <p><strong>Farve:</strong> ${fisk.FiskeFarve}</p>
            <p><strong>Levested:</strong> ${fisk.FiskeLevested}</p>
            <p><strong>Længde:</strong> ${fisk.FiskeLaengde}</p>
            <p><strong>Spiser:</strong> ${fisk.FiskeSpiser}</p>
          </div>
        `;
        showTooltip(tekst);
      });
    });
  });
});