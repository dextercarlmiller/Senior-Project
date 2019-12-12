var board;
const human = "O";
const comp = "X";

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    for (var i = 1; i <= 9; i++) {
        board[i] = i;
    }
    //board = Array.from(Array(10).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = " ";
        cells[i].addEventListener('click', playerturn, false);
    }
    console.log(board);
    console.log(cells);
}

function playerturn(box) {
    turn(box.target.id, human)
}

function turn(boxId, player) {
    board[boxId] = player;
    document.getElementById(boxId).innerText = player;
}