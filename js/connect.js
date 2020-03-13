var gridboard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
var player = 1
var turnValue = 1;

//Constructor!
function startconnect() {
    /*This is my constructor to reset the board and start a new game. 
     */
    player = 1;
    gridboard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    refreshgridboard();
}

function selectColumn(column) {
    console.log(column);
    if (player == 1) {
        drop(column, player);
        player = 2;
        //document.getElementById()
    } else {
        drop(column, player);
        player = 1;
    }
    refreshgridboard();
    checkConnectWin(gridboard);
}

function refreshgridboard() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            if (gridboard[row][col] == 0) {
                document.getElementById("cell" + row + col).style.setProperty("background-color", "#FFFFFF");
            } else if (gridboard[row][col] == 1) {
                document.getElementById("cell" + row + col).style.setProperty("background-color", "#FFFF00");
            } else if (gridboard[row][col] == 2) {
                document.getElementById("cell" + row + col).style.setProperty("background-color", "#FF0000");
            }
        }
    }
}

function drop(col, player) {
    for (var row = 5; row >= 0; row--) {
        if (gridboard[row][col] == 0) {
            gridboard[row][col] = player;
            break;
        }
    }
}

function checkConnectWin(gridboard) {
    Winner = false;
    //diagonal in \ direction
    for(row=0;row<5;row++){
        for (col=0;col<5;col++){
            if (gridboard[row][col] == gridboard[row+1][col+1] 
                && gridboard[row+1][col+1] == gridboard[row+2][col+2]  
                && gridboard[row+2][col+2] == gridboard[row+3][col+3] 
                && gridboard[row+3][col+3] == gridboard[row+4][col+4]){
                    console.log("There is a win!!!!!!!");
            }
        }
    }
}

function checkConnectDraw() {

}

function AlertConnectWinner() {
    if (checkConnectWin) {
        //Alert winner
    }
    if (checkConnectDraw) {
        //Alert Draw
    }
}