"use strict";

/* HENTER HTML-ELEMENTERNE
   - Vi connecter JS med de ting der står i HTML */
const dodger = document.getElementById("dodger");          // Spilleren (fisken)
const game = document.getElementById("game");              // Hele spilområdet
const ormPoint = document.getElementById("orm-point");     // Ormen (den der giver point)
const scoreElement = document.getElementById("score");     // Score-tekst på skærmen

/* LYDE */
const moveSound = document.getElementById("movementSound");      // Lyd når fisken bevæger sig

/*    KONSTANTER (Størrelser og værdier) */
const dodgerWidth = 150;   // Fiskens bredde i pixels (samme som CSS)
const dodgerHeight = 150;  // Fiskens højde i pixels
const ormSize = 50;        // Ormens størrelse

let score = 0;             // Startscore = 0

/* STARTPOSITION FOR FISKEN
   - Gør at fisken starter cirka i midten */
dodger.style.left = "625px";
dodger.style.bottom = "400px";

/* LYTTER EFTER TASTATUR-KLIKKET
   - Når man trykker på piletasterne sker der noget */
document.addEventListener("keydown", function (e) {

  if (e.key === "ArrowLeft")  moveDodgerLeft();   // Venstre pil
  if (e.key === "ArrowRight") moveDodgerRight();  // Højre pil
  if (e.key === "ArrowUp")    moveDodgerUp();     // Op pil
  if (e.key === "ArrowDown")  moveDodgerDown();   // Ned pil
});

/*    FUNKTIONER TIL AT BEVÆGE FISKEN */

/*  VENSTRE  */
function moveDodgerLeft() {

  // Hent nuværende venstre-position (uden "px")
  const left = parseInt(dodger.style.left.replace("px", ""));

  // Tjek at fisken ikke går udenfor venstre kant
  if (left > 0) {
    dodger.style.left = `${left - 30}px`;   // Flyt 30 px til venstre
    dodger.style.transform = "scaleX(-1)";  // Vender fisken mod venstre
    playSoundOnMovement();                  // Afspil lyd
    checkOrmCollision();                    // Tjek om fisken rammer ormen
  } 
  else {
    playSoundOnGameOver();
  }
}

/*  HØJRE  */
function moveDodgerRight() {

  const left = parseInt(dodger.style.left.replace("px", ""));
  const maxRight = game.offsetWidth - dodgerWidth; // højre grænse

  if (left < maxRight) {
    dodger.style.left = `${left + 30}px`;  // Flyt højre
    dodger.style.transform = "scaleX(1)";  // Vender fisken mod højre
    playSoundOnMovement();
    checkOrmCollision();
  } 
  else {
    playSoundOnGameOver();
  }
}

/*  OP  */
function moveDodgerUp() {

  const bottom = parseInt(dodger.style.bottom.replace("px", ""));
  const maxTop = game.offsetHeight - dodgerHeight;

  if (bottom < maxTop) {
    dodger.style.bottom = `${bottom + 30}px`;  // Flyt op
    dodger.style.transform = "rotate(-90deg)"; // Peg opad
    playSoundOnMovement();
    checkOrmCollision();
  } 
  else {
    playSoundOnGameOver();
  }
}

/*  NED  */
function moveDodgerDown() {

  const bottom = parseInt(dodger.style.bottom.replace("px", ""));

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 30}px`;  // Flyt ned
    dodger.style.transform = "rotate(90deg)";  // Peg nedad
    playSoundOnMovement();
    checkOrmCollision();
  } 
  else {
    playSoundOnGameOver();
  }
}

/* LYDE */

// Afspiller bevægelseslyd
function playSoundOnMovement() {
  moveSound.currentTime = 0; // Spol til start
  moveSound.play();
}


/* ORMPLACERING (tilfældige positioner) */

function placeOrmRandomly() {

  // Størrelsen af spillet
  const maxX = game.offsetWidth - ormSize;
  const maxY = game.offsetHeight - ormSize;

  // Lav et tilfældigt sted
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Placer ormen
  ormPoint.style.left = `${randomX}px`;
  ormPoint.style.bottom = `${randomY}px`;
}

/* TJEK OM FISKEN RAMMER ORMEN  */
function checkOrmCollision() {

  // Fisken og ormens positioner
  const dodgerRect = dodger.getBoundingClientRect();
  const ormRect = ormPoint.getBoundingClientRect();

  // Tjekker om de overlapper hinanden
  const isColliding =
    !(dodgerRect.right < ormRect.left ||
      dodgerRect.left > ormRect.right ||
      dodgerRect.bottom < ormRect.top ||
      dodgerRect.top > ormRect.bottom);

  // Hvis fisken rammer ormen
  if (isColliding) {
    score++; // +1 point
    scoreElement.textContent = `Point: ${score}`;
    placeOrmRandomly(); // Flyt ormen til et nyt sted
  }
}

/* TILBAGE-KNAP FUNKTION */
document.getElementById("tilbage").addEventListener("click", function () {
  window.location.href = "../index-akvarie.html"; // Gå tilbage til akvariet
});


/* NÅR SPILLET STARTER */
window.addEventListener("load", () => {
  placeOrmRandomly(); // Ormen dukker op et tilfældigt sted
});

