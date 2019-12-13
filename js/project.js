var board = [];
const human = "O";
const comp = "X";
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    // board = Array.from(Array(9).keys());
    for (var i = 1; i <= 9; i++) {
        temp = board.push(i);
    }

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', playerturn, true);
    }
}

function playerturn(box) {
    turn(box.target.id, human)
}

function turn(boxId, player) {
    board[boxId] = player;
    document.getElementById(boxId).innerText = player;
}