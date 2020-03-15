var gridboard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
var player = 1;

//Constructor (starts a new game)
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
    if(!columnFull(column)){
        drop(column, player);
        if (player == 1){
            player = 2;
        }
        else{
            player = 1;
        }    
    }
    refreshgridboard();
    AlertConnectWinner();
}
//updates the board of the correct color
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
//returns true if the column is full
function columnFull(columnselect){
    if (gridboard[0][columnselect] == 1 || gridboard[0][columnselect] == 2){
        Full = true;
    }else{
        Full = false;
    }
    return Full; 
}
//drops the play down the column
function drop(col, player) {
    for (var row = 5; row >= 0; row--) {
        if (gridboard[row][col] == 0) {
            gridboard[row][col] = player;
            return;
        }
    }
}
//returns true if the board is full
function checkConnectFull(gridboard){
    Full = true; 
    for (var row=0; row<5;row++){
        for(var col=0;col<6;row++){
            if (gridboard[row][col] == 0){
                Full = false;
            }
        }
    }
    return Full;
}
//returns true if there is a win
function checkConnectWin(gridboard) {
    Winner = false;
    //diagonal in - direction
    for(row=0;row<6;row++){
        for (col=0;col<4;col++){
            if (gridboard[row][col] == gridboard[row][col+1] 
                && gridboard[row][col+1] == gridboard[row][col+2]  
                && gridboard[row][col+2] == gridboard[row][col+3]){
                    if(gridboard[row][col] == (1||2)){
                        Winner=true;
                    }
                }
            }        
        }
    //diagonal in | direction
    for(row=0;row<3;row++){
        for (col=0;col<7;col++){
            if (gridboard[row][col] == gridboard[row+1][col] 
                    && gridboard[row+1][col] == gridboard[row+2][col]  
                    && gridboard[row+2][col] == gridboard[row+3][col]){
                if(gridboard[row][col] == (1||2)){
                        Winner=true;
                }
            }
        }        
    }
    //diagonal in \ direction
        for(row=0;row<3;row++){
            for (col=0;col<4;col++){
                if (gridboard[row][col] == gridboard[row+1][col+1] 
                        && gridboard[row+1][col+1] == gridboard[row+2][col+2]  
                        && gridboard[row+2][col+2] == gridboard[row+3][col+3]){
                    if(gridboard[row][col] == (1||2)){
                            Winner=true;
                    }
                }
            }        
        }            
    //diagonal in / direction
        for(row=0;row<3;row++){
            for (col=3;col<7;col++){
                if (gridboard[row][col] == gridboard[row+1][col-1] 
                        && gridboard[row+1][col-1] == gridboard[row+2][col-2]  
                        && gridboard[row+2][col-2] == gridboard[row+3][col-3]){
                    if(gridboard[row][col] == (1||2)){
                        Winner=true;
                    }
                }
            }        
        }
return Winner;            
}
//returns true if there is a draw
function checkConnectDraw(gridboard) {
    if (!checkConnectWin(gridboard)&&checkConnectFull(gridboard)){
        draw = true; 
    }
}
//alerts the page there is a winner or draw
function AlertConnectWinner() {
    if (checkConnectWin(gridboard)) {
        alert("There is the winner!")
    }
    // if (checkConnectDraw(gridboard)) {
    //     alert("There is a Draw!");
    
}