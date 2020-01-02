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
    board = [];
    turnValue = 1;
    //board
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
    console.log(board);
    console.log("Player " + turnValue + " Turn");
    miniMax(board,turnValue);
}

function score(board,max,min) {
    if (checkWin(board,max)){
        return 1;
    }
    else if (checkWin(board,min)){
        return -1;
    }
    else if (checkCat(board,max)){
        return 0;
    }
}
function miniMax(board,player){
    if (player == 1){
        max = "X";
        min = "O";
    } else {
        min = "X";
        max = "O";
    }
    maxTurn(board,max,min);
}
function maxTurn(compBoard,max,min) {
    if (checkWin(board,max)){
        return 1;
    }
    else if (checkWin(board,min)){
        return -1;
    }
    else if (checkCat(board,max)){
        return 0;
    }
    //This fills the availableSpots array with empty spaces
    availableSpots = [];
    for (var i = 0; i<compBoard.length;i++){
        if (Number(compBoard[i])){
            availableSpots.push(compBoard[i]);
        }
    }
    //This scores Each possible move that max can take
    var moves = [];
    for (var i = 0; i < availableSpots.length; i++){
        var move = {};
        //for each move, index the move, and fill the move with max
        move.index = compBoard[availableSpots[i]];
        compBoard[availableSpots[i]] = max;

        var result = minTurn(compBoard,max,min);
        move.score = result.score;

        compBoard[availableSpots[i]] = move.index;

        moves.push(move);
    }
    console.log(moves);
    var bestMove;
    bestScore = -10;
    for (var i = 0; i < moves.length;i++){
        if (moves[i].score > bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
        }
    }
    return console.log(moves[bestMove]); 
}
function minTurn(compBoard,max,min){
    if (checkWin(board,max)){
        return 1;
    }
    else if (checkWin(board,min)){
        return -1;
    }
    else if (checkCat(board,max)){
        return 0;
    }
    //This fills the availableSpots array with empty spaces
    availableSpots = [];
    for (var i = 0; i<compBoard.length;i++){
        if (Number(compBoard[i])){
            availableSpots.push(compBoard[i]);
        }
    }
    //This scores Each possible move that max can take
    var moves = [];
    for (var i = 0; i < availableSpots.length; i++){
        var move = {};
        //for each move, index the move, and fill the move with max
        move.index = compBoard[availableSpots[i]];
        compBoard[availableSpots[i]] = max;
        console.log(maxTurn(compBoard,max,min));
        var result = maxTurn(compBoard,max,min);
        console.log(result);
        move.score = result;

        compBoard[availableSpots[i]] = move.index;

        moves.push(move);
    }
    console.log(moves);  
    var bestMove;
    bestScore = 10;
    for (var i = 0; i < moves.length;i++){
        if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
        }
    }
    return moves[bestMove].index; 
}  