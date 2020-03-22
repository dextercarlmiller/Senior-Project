var board = [];
var Win = false;
const player1 = "X";
const player2 = "O";
var turnValue = 1;
const cells = document.querySelectorAll(".celltictac");
startTicTacToe();

//constructor
function startTicTacToe() {
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
//destructor and removes event listener
function endGame() {
    for (var i = 0; i < 9; i++) {
        cells[i].removeEventListener('click', playerturn, true);
    }
}
//player turn function
function playerturn(box) {
    if (turnValue == 1) {
        turn(box.target.id, player1)
        if(AlertWinner(board,player1)){
            document.getElementById("AlertWinner").innerText = (player1 +" is the Winner!");        
            endGame();
        }
        if(AlertCat(board,player1)){
            document.getElementById("AlertWinner").innerText = ("It's a Draw!");
            endGame();
        }
    } else {
        turn(box.target.id, player2)
        if(AlertWinner(board,player2)){
            document.getElementById("AlertWinner").innerText = (player2 +" is the Winner!");        
            endGame();
        }
        if(AlertCat(board,player2)){
            document.getElementById("AlertWinner").innerText = ("It's a Draw!");
            endGame();
        }
    }
}
//computer turn function
function ComputerTurn(box) {
    if (turnValue == 1) {
        turn(box, player1)
        if(AlertWinner(board,player1)){
            document.getElementById("AlertWinner").innerText = (player1 +" is the Winner!");        
            endGame();
        }
        if(AlertCat(board,player1)){
            document.getElementById("AlertWinner").innerText = ("It's a Draw!");
            endGame();
        }
    } else {
        turn(box, player2)
        if(AlertWinner(board,player2)){
            document.getElementById("AlertWinner").innerText = (player2 +" is the Winner!");        
            endGame();
        }
        if(AlertCat(board,player2)){
            document.getElementById("AlertWinner").innerText = ("It's a Draw!");
            endGame();
        }
    }
}
function turn(boxId, player) {
    board[boxId] = player;
    document.getElementById(boxId).innerText = player;
    document.getElementById(boxId).removeEventListener('click', playerturn, true)
    SwitchPlayer(player);
    if(turnValue == 1){
        player = player1;
    } else {
        player = player2;
    }
    document.getElementById("AlertWinner").innerText = ("Player Turn:" + player);
}
//Switches player turn value
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
//Returns true if a Win
function AlertWinner(board,player) {
    if (checkWin(board, player)) {
        gamewinnner = true;
        return gamewinnner;
    }
    return false; 
}
//Returns true if a Draw
function AlertCat(board,player){
    if (checkCat(board, player)) {
        catwinner = true;
        return catwinner;
    }
    return false;
}
//Computer Turn
function CompTurn() {
    let compBoard = board;
    let bestmove = findBestMove(compBoard, turnValue);
    console.log(board);
    console.log(player);
    console.log(checkWin(board,player1));
    console.log(checkWin(board,player2))
    if(!checkWin(board,player)){
        if (turnValue == 1) {
            ComputerTurn(bestmove, player1);
        } else {
            ComputerTurn(bestmove, player2);
        }
    }
}

function evaluate(compBoard, max, min) {
    if (checkWin(compBoard, max)) {
        return 10;
    } else if (checkWin(compBoard, min)) {
        return -10;
    }
}

function findBestMove(compBoard, player) {
    let bestValue = -1000;
    let depth = 0;
    bestmove = [];
    bestscore = [];
    if (player == 1) {
        var max = "X";
    } else {
        var max = "O";
    }
    //This fills the availableSpots array with empty spaces
    let availableSpots = [];
    for (var i = 0; i < compBoard.length; i++) {
        if (Number.isInteger(compBoard[i])) {
            availableSpots.push(compBoard[i]);
        }
    }
    //This is the maximizer's first move (start recursion)
    for (var i = 0; i < availableSpots.length; i++) {
        compBoard[availableSpots[i]] = max;
        let moveValue = Math.max(bestValue, minimax(compBoard, false, max, depth + 1));
        compBoard[availableSpots[i]] = availableSpots[i];
        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestmove.push(availableSpots[i]);
        }
    }
    let FinalMove = bestmove[bestmove.length - 1];
    return FinalMove;
}

function minimax(minimaxBoard, isMax, MaxValue, depth) {
    if (MaxValue == "X") {
        var MinValue = "O";
    } else {
        var MinValue = "X";
    }

    //This fills the availableSpots array with empty spaces
    let availableSpots = [];
    for (var i = 0; i < minimaxBoard.length; i++) {
        if (Number.isInteger(minimaxBoard[i])) {
            availableSpots.push(minimaxBoard[i]);
        }
    }
    //Returns the score if maximizer won or minimizer
    let score = evaluate(minimaxBoard, MaxValue, MinValue);
    if (score == 10) {
        return (score - depth);
    }
    if (score == -10) {
        return (score + depth);
    }
    if (availableSpots.length == 0) {
        return 0;
    }
    //If it's maximizer's move
    if (isMax) {
        var best = -1000;
        for (var i = 0; i < availableSpots.length; i++) {
            minimaxBoard[availableSpots[i]] = MaxValue;
            var moveValue = minimax(minimaxBoard, false, MaxValue, depth + 1);
            minimaxBoard[availableSpots[i]] = availableSpots[i];
            if (moveValue > best) {
                best = moveValue;
            }
        }
    }
    //If it's minimizers move 
    else {
        var best = 1000;
        for (var i = 0; i < availableSpots.length; i++) {
            minimaxBoard[availableSpots[i]] = MinValue;
            var moveValue = minimax(minimaxBoard, true, MaxValue, depth + 1);
            minimaxBoard[availableSpots[i]] = availableSpots[i];
            if (moveValue < best) {
                best = moveValue;
            }
        }
    }
    return best;
}