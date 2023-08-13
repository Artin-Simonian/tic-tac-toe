const COLOR_LOOKUP = {
  "1": "red",
  "-1": "blue",
  "null": "white",
};

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board;
let winner;
let turn;

const playerMessage = document.querySelector("h1");
const btn = document.querySelector("button");

document.getElementById("board").addEventListener("click", handleMove);
btn.addEventListener("click", initialize);

initialize();

function initialize() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

