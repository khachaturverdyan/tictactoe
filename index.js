let currentPlayer = 'X';
const proclamation = document.getElementById('proclamation')
const cells = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
const startButton = document.getElementById('startButton');
const gameContainer = document.getElementById('gameContainer');
const restartButton = document.getElementById('restartButton');


function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        ) {
            return true;
        }
    }
    return false;
}

function handleCellClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;


        if (checkWinner()) {
            console.log();
            proclamation.innerText = `Player ${currentPlayer} wins!`;
            gameContainer.style.display = 'none';
            startButton.style.display = 'block';
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

}

function startGame() {
    startButton.style.display = 'none';
    gameContainer.style.display = 'block';

    cells.forEach(function (cell) {
        cell.addEventListener('click', handleCellClick);
    });
}


startButton.addEventListener('click', startGame)
