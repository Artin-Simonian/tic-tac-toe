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
const endMessage = document.querySelector('h2');

document.getElementById("board").addEventListener("click", handleMove);
btn.addEventListener("click", initialize);

initialize();

function initialize() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

function lastMessage(){
  
  endMessage.innerText = 'Nice Game';
}

if(initialize() = true){
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

function handleMove(evt) {
  const idx = parseInt(evt.target.id.replace("box-", ""));
  if (
    isNaN(idx) ||
    board[idx] ||
    winner
  )
    return;
  board[idx] = turn;
  turn *= -1;
  winner = getWinner();
  render();
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (
      Math.abs(
        board[winningCombos[i][0]] +
          board[winningCombos[i][1]] +
          board[winningCombos[i][2]]
      ) === 3
    )
      return board[winningCombos[i][0]];
  }

  if (board.includes(null)) return null;
  return "T";
}

function render() {
  renderBoard();
  renderMessage();
  lastMessage();
  btn.disabled = !winner;
}

function renderBoard() {
  board.forEach(function (sqVal, idx) {
    const squareEl = document.getElementById(`box-${idx}`);
    squareEl.style.backgroundColor = COLOR_LOOKUP[sqVal];
    squareEl.className = !sqVal ? "avail" : "";
  });
}

function renderMessage() {
  if (winner === "T") {
    playerMessage.innerHTML = "The game is tied... Try again!";
  } else if (winner) {
    playerMessage.innerHTML = `Congratulations to <span style="color: ${
      COLOR_LOOKUP[winner]
    }">${COLOR_LOOKUP[winner].toUpperCase()}</span>!`;
  } else {
    playerMessage.innerHTML = `<span style="color: ${
      COLOR_LOOKUP[turn]
    }">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn to play`;
  }
}
