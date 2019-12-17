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
function endGame(){
    for( var i = 0; i < 9; i++){
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
    AlertWinner(board,player);
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
function checkWin(board,player) {
    Win = false;
    //horizontal
    for (var i = 0; i < 8; i = i + 3) {
        if (board[i] == board[i + 1] && board[i] == board[i + 2]) {
            if(board[i] == player){
                Win = true;
                return Win;
            }
        }
    }
    //vertical
    for (var i = 0; i < 3; i++) {
        if (board[i] == board[i + 3] && board[i] == board[i + 6]) {
            if(board[i] == player){
                Win = true;
                return Win;
            }
        }
    }
    //diagonal
    if (board[0] == board[4] && board[4] == board[8]) {
        if(board[i] == player){
            Win = true;
            return Win;
        }
    }
    if (board[2] == board[4] && board[4] == board[6]) {
        if(board[i] == player){
            Win = true;
            return Win;
        }
    }
return Win;
}
//Returns true if there is a cats game
function checkCat(board,player) {
    //cats game
    if (BoardFull(board) && !checkWin(board,player)) {
        return true;
    } else {
        return false;
    }
}
function AlertWinner(board,player){
    if (checkWin(board,player)){
        alert(player + " is the winner!")
        endGame();
    }
    if (checkCat(board,player)){
        alert("It's a Draw!");
        endGame();
    }
}

function CompTurn() {
    console.log(board);
    console.log("Player"+turnValue +" Turn");
    
}
function score(board){
    checkWin(board)
}
function maxTurn(board,player){
    if (checkWin(board,player)){
        return "Winner";
    }
}