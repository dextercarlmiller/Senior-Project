var board = [];
var Win = false;
const player1 = "X";
const player2 = "O";
var turnValue = 1;
const cells = document.querySelectorAll(".cell")
startGame();

function startGame() {
    /*  Construct the board to be empty, start with player 1, 
    the buttons are listening for click and switches turn after
    each click. 
    */
    turnValue = 1;
    //board
    board = Array();
    for (var i = 0; i < 9; i++) {
        temp = board.push(i);
    }
    //buttons
    for (var i = 0; i < 9; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', playerturn, true);
    }
}

function endGame() {
    for (var i = 0; i < 9; i++) {
        cells[i].removeEventListener('click', playerturn, true);
    }
}

function playerturn(box) {
    if (turnValue == 1) {
        turn(box.target.id, player1)
    } else {
        turn(box.target.id, player2)
    }
}

function turn(boxId, player) {
    board[boxId] = player;
    console.log(board);
    document.getElementById(boxId).innerText = player;
    document.getElementById(boxId).removeEventListener('click', playerturn, true)
    AlertWinner(board, player);
    SwitchPlayer(player);
}

function SwitchPlayer(player) {
    if (player == player1) {
        turnValue = 2;
    } else {
        turnValue = 1;
    }
}
//Returns true if the board is full (for cat game)
function BoardFull(board) {
    var j = 0;
    var isfull = false;
    for (var i = 0; i < board.length; i++) {
        if (board[i] == "X" || board[i] == "O") {
            j++;
        }
    }
    if (j == 9) {
        isfull = true;
    }
    return isfull;
}
//Returns true if there is a win
function checkWin(board, player) {
    Win = false;
    //horizontal
    for (var i = 0; i < 8; i = i + 3) {
        if (board[i] == board[i + 1] && board[i] == board[i + 2]) {
            if (board[i] == player) {
                Win = true;
                return Win;
            }
        }
    }
    //vertical
    for (var i = 0; i < 3; i++) {
        if (board[i] == board[i + 3] && board[i] == board[i + 6]) {
            if (board[i] == player) {
                Win = true;
                return Win;
            }
        }
    }
    //diagonal
    if (board[0] == board[4] && board[4] == board[8]) {
        if (board[0] == player) {
            Win = true;
            return Win;
        }
    }
    if (board[2] == board[4] && board[4] == board[6]) {
        if (board[2] == player) {
            Win = true;
            return Win;
        }
    }
    return Win;
}
//Returns true if there is a cats game
function checkCat(board, player) {
    //cats game
    if (BoardFull(board) && !checkWin(board, player)) {
        return true;
    } else {
        return false;
    }
}

function AlertWinner(board, player) {
    if (checkWin(board, player)) {
        alert(player + " is the winner!")
        endGame();
    }
    if (checkCat(board, player)) {
        alert("It's a Draw!");
        endGame();
    }
}

function CompTurn() {
    let compBoard = board;
    let bestmove = findBestMove(compBoard, turnValue);
    if (turnValue == 1) {
        turn(bestmove, player1);
    } else {
        turn(bestmove, player2);
    }
}

function evaluate(compBoard, max, min) {
    if (checkWin(compBoard, max)) {
        return 1;
    } else if (checkWin(compBoard, min)) {
        return -1;
    } else if (checkCat(compBoard, max)) {
        return 0;
    }
}

function findBestMove(compBoard, player) {
    let bestValue = -Infinity;
    bestmove = [];
    if (player == 1) {
        var max = "X";
    } else {
        var max = "O";
    }
    //This fills the availableSpots array with empty spaces
    let availableSpots = [];
    for (var i = 0; i < compBoard.length; i++) {
        if (Number(compBoard[i])) {
            availableSpots.push(compBoard[i]);
        }
    }
    //This is the maximizer's first move
    for (var i = 0; i < availableSpots.length; i++) {
        compBoard[availableSpots[i]] = max;
        let moveValue = Math.max(bestValue, minimax(compBoard, false, max));
        console.log(moveValue);
        compBoard[availableSpots[i]] = availableSpots[i];
        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestmove.push(availableSpots[i]);
        }
        console.log(availableSpots[i]);
    }
    let FinalMove = bestmove[bestmove.length - 1];
    console.log(bestmove);
    return FinalMove;
}

function minimax(minimaxBoard, isMax, MaxValue) {
    if (MaxValue == "X") {
        var MinValue = "O";
    } else {
        var MinValue = "X";
    }
    //Returns the score if maximizer won or minimizer
    let score = evaluate(minimaxBoard, MaxValue, MinValue);
    if (score == 1) {
        return score;
    }
    if (score == -1) {
        return score;
    }
    if (score == 0) {
        return score;
    }
    //This fills the availableSpots array with empty spaces
    let availableSpots = [];
    for (var i = 0; i < minimaxBoard.length; i++) {
        if (Number(minimaxBoard[i])) {
            availableSpots.push(minimaxBoard[i]);
        }
    }
    //If it's maximizer's move
    if (isMax) {
        let best = -Infinity;
        for (var i = 0; i < availableSpots.length; i++) {
            minimaxBoard[availableSpots[i]] = MaxValue;
            var moveValue = Math.max(best, minimax(minimaxBoard, false, MaxValue));
            minimaxBoard[availableSpots[i]] = availableSpots[i];
            if (moveValue > best) {
                best = moveValue;
            }
        }
        return best;
    }
    //If it's minimizers move 
    else {
        let best = Infinity;
        for (var i = 0; i < availableSpots.length; i++) {
            minimaxBoard[availableSpots[i]] = MinValue;
            var moveValue = Math.min(best, minimax(minimaxBoard, true, MaxValue));
            minimaxBoard[availableSpots[i]] = availableSpots[i];
            if (moveValue < best) {
                best = moveValue;
            }
        }
        return best;
    }
}