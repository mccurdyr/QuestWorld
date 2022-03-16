import skills from "./fragments/skills.js";
import Player from "./characters/Player.js";

const containerEl = document.querySelector(".container");
let showElements = false;

//Start Button Stuff
const startButton = document.createElement("button");
startButton.classList.add("start");
containerEl.appendChild(startButton);
startButton.innerText = "Start Game";
startButton.addEventListener("click", () => {
  let playerName = prompt("What is your name?");
  const player = new Player(playerName);
  console.log(`Player name: ${playerName}`);
  containerEl.removeChild(startButton);

  //skill allocation start
  containerEl.innerHTML += skills();
//   if (player.sp === 0) {
//     containerEl.remove(skills());
//   }
});

const toggleEl = document.querySelector("down");
function showButtons() {
  toggleEl.classList.toggle("hidden");
//   if (showElements) {
//     showElements = true;
  }

const levelBtn = document.createElement("button");
containerEl.appendChild(levelBtn);
levelBtn.innerText = "Stats";
levelBtn.addEventListener("click", () => {
  showButtons();
});