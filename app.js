/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/* Game Init Variables */

let scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

/* SELECT THE DOM */
document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", () => {
  // 1. RANDOM NUMBER
  let dice = Math.floor(Math.random() * 6) + 1;
  //2. DISPLAY THE RESULT
  let diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
  //3. UPDATE THE ROUND SCORE IF NOT == 1
  if (dice !== 1) {
    //ADD SCORE
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //NEXT PLAYER
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  //ADD CURRENT SCORE TO GLOBAL SCORE
  scores[activePlayer] += roundScore;
  //UPDATE THE UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  //CHECK IF THE PLAYER WON THE GAME
  if (scores[activePlayer] >= 100) {
    document.querySelector("#name" + activePlayer).textContent = "player win ";
  } else {
    //NEXT PLAYER
    nextPlayer();
  }
});

let nextPlayer = () => {
  //NEXT PLAYER
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector(".player-0-panel").classList.remove("active");
  //document.querySelector(".player-1-panel").classList.add("active");
  document.querySelector(".dice").style.display = "none";
};
