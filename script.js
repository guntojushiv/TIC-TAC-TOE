// script.js

let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameActive = true;
let moves = 0;
let winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

function playerMove(cellIndex) {
  if (!gameActive || cells[cellIndex].textContent !== '') return;

  cells[cellIndex].textContent = currentPlayer;
  moves++;
  checkWin();
  togglePlayer();
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  for (let combo of winningCombos) {
    let [a, b, c] = combo;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      displayResult(`${currentPlayer} wins!`);
      gameActive = false;
      return;
    }
  }
  if (moves === 9) {
    displayResult("It's a draw!");
    gameActive = false;
  }
}

function displayResult(result) {
  document.getElementById('result').textContent = result;
}

function resetGame() {
  currentPlayer = 'X';
  cells.forEach(cell => cell.textContent = '');
  gameActive = true;
  moves = 0;
  displayResult('');
}
