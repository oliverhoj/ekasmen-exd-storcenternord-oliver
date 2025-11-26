"use strict";

// funktion der afspiller lyd når boble klikkes og tilføjer pop animation
function handleBubbleClick(event) {
  const bubbleSound = new Audio("exd-akvarie/sound/bubble-pop.mp3");
  bubbleSound.play();
}

// lav den nu med skattekisten, når man klikker på den så skal der afspilles en lyd af skattekisten der åbnes, med skattekiste-sounden
function handleSkattekisteClick(event) {
  const skattekisteSound = new Audio("exd-akvarie/sound/skattekiste-sound.mp3");
  skattekisteSound.play();
}

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to all bubbles
  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubble.addEventListener("click", handleBubbleClick);
  });
});

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click handler to skattekiste
  const skattekiste = document.getElementById("skattekiste");
  skattekiste.addEventListener("click", handleSkattekisteClick);
});

function playBtnClick(event) {
  const playBtnSound = new Audio("exd-akvarie/sound/eating-chips.mp3");
  playBtnSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("play-button");
  playBtn.addEventListener("click", playBtnClick);
});

// Event listener til play-knappen for at navigere til spil siden
document.getElementById("play-button").addEventListener("click", function () {
  window.location.href = "../index-spil.html";
});

function piratClick(event) {
  const piratSound = new Audio("exd-akvarie/sound/wooden-ship-break.mp3");
  piratSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const piratskib = document.getElementById("piratskib");
  piratskib.addEventListener("click", piratClick);
});

// Tilføj event listener til knappen for at navigere til fakta siden
document.getElementById("fish-button").addEventListener("click", function () {
  window.location.href = "exd-akvarie/facts-akvarie.html";
});




// Opretter vores data-struktur med et array som indeholder JS objekter
const fishInfo = [
  {
    fishName: "Gul kirurgfisk",
    fishColor: "Gul",
    fishLocation: "Det centrale/vestlige Stillehav",
    fishLength: "Op til 20 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Dværgkejserfisk",
    fishColor: "Orange og sort",
    fishLocation:
      "Australien, Indonesien, Det østlige Stillehav og Det centrale/vestlige Stillehav",
    fishLength: "Op til 19 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Paletkirurgfisk",
    fishColor: "Blå, sort og gul",
    fishLocation: "Det Indiske Ocean og det vestlige Stillehav",
    fishLength: "Op til 31 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Klovnefisk",
    fishColor: "Orange, sort og hvid",
    fishLocation: "Det østlige Indiske Ocean, Australien og Indonesien",
    fishLength: "Op til 8 cm",
    fishFood: "Mikroalger, zooplankton og små krebsdyr",
  },
  {
    fishName: "Pudsefisk",
    fishColor: "Hvid, blå og sort",
    fishLocation:
      "Det østlige Indiske Ocean, Det vestlige Indiske Ocean, Australien, Det Røde Hav, Indonesien, Det østlige Stillehav og Det centrale/vestlige Stillehav",
    fishLength: "Op til 11 cm",
    fishFood: "Parasitter, små krebsdyr og zooplankton",
  },
  {
    fishName: "Hvidstrubet kirugfisk",
    fishColor: "Hvid, blå, gul og sort",
    fishLocation: "Det østlige Indiske Ocean og Indonesien",
    fishLength: "Op til 30 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Pincetfisk",
    fishColor: "Hvid, gul, orange og sort",
    fishLocation: "Det vestlige Indiske Ocean, Australien og Indonesien",
    fishLength: "Op til 20 cm",
    fishFood: "Hvirvelløse dyr, små krebsdyr, større krebsdyr og zooplankton",
  },
  {
    fishName: "Sortbåndet kirugfisk",
    fishColor: "Hvid og sort",
    fishLocation: "Det øst og vestlige Indiske Ocean",
    fishLength: "Op til 11 cm",
    fishFood: "Alger",
  },
];

// Venter med at køre JS koden indtil hele HTML-siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip"); // Finder tooltip id og gemmer det i en variabel
  // Funktion der viser tooltip med fiskeoplysninger
  // Parameter: html - den tekst indeholdende html-tags som vi vil vise i tooltip'en
  function showTooltip(html) {
    if (tooltip) {
      // Indsætter teksten i tooltippen
      tooltip.innerHTML = html; // Indsætter teksten i tooltip'en
      tooltip.classList.add("is-visible"); // Gør tooltip'en synlig med css klassen
      setTimeout(function () {
        tooltip.classList.remove("is-visible"); // Fjerner synligheds-klassen efter 8 sekunder
      }, 8000);
    }
  }

  fishInfo.forEach((fish) => {
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

    const className = classMap[fish.fishName];

    // Tilføjer event listeners til hver bil baseret på data-strukturen
    fishInfo.forEach((fish) => {
      const fishDetails = classMap[fish.fishName];
      if (fishDetails) {
        document.querySelectorAll("#" + fishDetails).forEach((elem) => {
          elem.addEventListener("click", () => {
            const fishDetails = `
        <strong>${fish.fishName}</strong><br>
        Color: ${fish.fishColor}<br>
        Location: ${fish.fishLocation}<br>
        Length: ${fish.fishLength}<br>
        Food: ${fish.fishFood}
        `; // Opretter HTML tekst med fiskeoplysninger
            // ShowTooltip er en funktion fra tidligere, forventer en parameter som vi her henter fra fishDetails
            showTooltip(fishDetails);
          });
        });
      }
    }); // Lukker DOMContentLoaded

    if (className) {
      document.querySelectorAll("." + fish.fishName).forEach((elem) => {
        // Vælger alle elementer med den givne className
        elem.addEventListener("click", () => {
          const fishDetails = `
        <strong>${fish.fishName}</strong><br>
        Color: ${fish.fishColor}<br>
        Location: ${fish.fishLocation}<br>
        Length: ${fish.fishLength}<br>
        Food: ${fish.fishFood}
        `; // Opretter HTML tekst med fiskeoplysninger
          // ShowTooltip er en funktion fra tidligere, forventer en parameter som vi her henter fra fishDetails
          showTooltip(fishDetails);
        });
      });
    }
  });
}); // Lukker DOMContentLoaded