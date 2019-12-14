var board = []
const player1 = "X";
const player2 = "O";
var turnValue = 1;
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    /*  Construct the board to be empty, start with player 1, 
    the buttons are listening for click and switches turn after
    each click. 
    */
    board = [];
    turnValue = 1;
    document.querySelector(".endgame").style.display = "none";
    //board
    for (var i = 0; i < 10; i++) {
        temp = board.push(i);
    }
    //buttons
    for (var i = 0; i < 9; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', playerturn, true);
    }
}

function playerturn(box) {
    if (turnValue == 1) {
        turn(box.target.id, player1)
    }
    else{
        turn(box.target.id, player2)
    }


}
function SwitchPlayer(player){
    if (player == player1){
        turnValue = 2;
    }
    else{
        turnValue = 1;
    }    
}

function turn(boxId, player) {
    board[boxId] = player;
    document.getElementById(boxId).innerText = player;
    document.getElementById(boxId).removeEventListener('click',playerturn,true)
    SwitchPlayer(player);
}