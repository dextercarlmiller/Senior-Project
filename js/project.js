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
    console.log(boxId);
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
    if (turnValue == 1){
        player = player2;
    }else{
        player = player1;
    }
    bestmove = findBestMove(board,turnValue);
    board[bestmove] = player;
    document.getElementById(bestmove).innerText = player;
    document.getElementById(bestmove).removeEventListener('click', playerturn, true)
    AlertWinner(board,player);
    SwitchPlayer(player);
    console.log(bestmove);
}

function evaluate(board,max,min) {
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
function findBestMove(board,player){
    bestValue = -10;
    bestmove = [];
    if (player == 1){
        max = true;
        min = false;
    } else {
        min = true;
        max = false;
    }
    //This fills the availableSpots array with empty spaces
    availableSpots = [];
    for (var i = 0; i<board.length;i++){
        if (Number(board[i])){
            availableSpots.push(board[i]);
        }
    }
    for (var i = 0; i < availableSpots.length; i++){
        board[availableSpots[i]] = "X";
        var moveValue = minimax(board,false);
        board[availableSpots[i]] = availableSpots[i];
        if (moveValue > bestValue){
            bestValue = moveValue;
            console.log(bestmove);
            bestmove.push(availableSpots[i]);
        }
    }
    return bestmove[0];
}
function minimax(compBoard,isMax) {
    if (isMax){
        max = "X";
        min = "O";
    }else{
        max = "O";
        min = "X";
    }
    //Returns the score if maximizer won or minimizer
    var score = evaluate(compBoard,max,min);
    if (score == 1){
        return score;
    }
    if (score == -1){
        return score;
    }
    if (score == 0){
        return score;
    }
    //This fills the availableSpots array with empty spaces
    availableSpots = [];
    for (var i = 0; i<compBoard.length;i++){
        if (Number(compBoard[i])){
            availableSpots.push(compBoard[i]);
        }
    }
    //If it's maximizer's move
    if (isMax){
    best = -10;
    for (var i=0; i < availableSpots.length; i++){
        compBoard[availableSpots[i]] = "X";
        best = Math.max(best,minimax(compBoard,!isMax));
        compBoard[availableSpots[i]] = availableSpots[i];
    }
    console.log(best);
    return best;
    }
    //If it's minimizers move 
    else {
    best = 10;
    for (var i=0; i<availableSpots.length;i++){
        compBoard[availableSpots[i]] = "O";
        best = Math.min(best,minimax(compBoard,isMax));
        compBoard[availableSpots[i]] = availableSpots[i];
    }
    console.log(best);
    return best
}
}
