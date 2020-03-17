var gridboard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
var player = 1;
const connectcells = document.querySelectorAll(".connectcell")
startconnect();
//Constructor (starts a new game)
function startconnect() {
    //This is my constructor to reset the board and start a new game.
    //board
    player = 1;
    gridboard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++){ 
            document.getElementById(""+row+col).addEventListener("click",selectColumn,true);
        }
    }
    refreshgridboard();
}
function selectColumn(box) {
    column = (box.target.id%10);
    if(!columnFull(column)){
        drop(column, player, gridboard);
        if (player == 1){
            player = 2;
        }
        else{
            player = 1;
        }    
    }
    refreshgridboard();
    console.log(player);
    AlertConnectWinner(gridboard,player);
}
//updates the board of the correct color
function refreshgridboard() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            if (gridboard[row][col] == 0) {
                document.getElementById(""+row+col).style.setProperty("background-color", "#FFFFFF");
            } else if (gridboard[row][col] == 1) {
                document.getElementById(""+row + col).style.setProperty("background-color", "#FFFF00");
            } else if (gridboard[row][col] == 2) {
                document.getElementById(""+row + col).style.setProperty("background-color", "#FF0000");
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
function drop(col, player, connectboard) {
    for (var row = 5; row >= 0; row--) {
        if (connectboard[row][col] == 0) {
            connectboard[row][col] = player;
            return;
        }
    }
}
//returns true if the board is full
function checkConnectFull(gridboard){
    console.log(gridboard[0][0]);
    for (var row=0; row<5;row++){
        for(var col=0;col<6;row++){
            if(gridboard[row][col] == 0){
                Full = false;
                return Full;
            }
            else{
                Full = true;
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
                    if((gridboard[row][col] == 1) || (gridboard[row][col] == 2)){
                        Winner=true;
                        return Winner;
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
                    if((gridboard[row][col] == 1) || (gridboard[row][col] == 2)){
                        Winner=true;
                        return Winner;
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
                    if((gridboard[row][col] == 1) || (gridboard[row][col] == 2)){
                        Winner=true;
                        return Winner;
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
                    if((gridboard[row][col] == 1) || (gridboard[row][col] == 2)){
                        Winner=true;
                        return Winner;
                    }
                }
            }        
        }
return Winner;            
}
//returns true if there is a draw
function checkConnectDraw(Connectboard) {
    console.log(Connectboard);
    if (!checkConnectWin(Connectboard)&&checkConnectFull(Connectboard)){
        draw = true; 
    }else{
        draw = false;
    }
    return draw;
}
//alerts the page there is a winner or draw
function AlertConnectWinner(ConnectBoard,player) {
    var ConnectWinner = " "; 
    if (player == 1){
        ConnectWinner = "Red";
        }
        else{
        ConnectWinner = "Yellow";
    }   
    if (checkConnectWin(ConnectBoard)) {
        alert(ConnectWinner+" is the winner!");
        endconnect();
    }
    if (checkConnectDraw(ConnectBoard)) {
        alert("There is a Draw!");
    }    
}
function endconnect(){
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++){ 
            document.getElementById(""+row+col).removeEventListener("click",selectColumn,true);
        }
    }
}