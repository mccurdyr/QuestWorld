import skills from "./fragments/skills.js";
import Player from "./characters/Player.js";

const containerEl = document.querySelector(".container");
const downBtns = document.querySelectorAll(".down")

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

  // checkPoints();

  //skill allocation start
  containerEl.innerHTML += skills();
});

// function checkPoints() {
//   if(player.sp>=sa){

//   }
// }