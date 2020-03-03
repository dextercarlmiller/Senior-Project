var gridboard = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];
var Winner = false; 
var player = 1
var turnValue = 1;
function startconnect(){
    /*This is my constructor to reset the board and start a new game. 
    */
   turnValue = 1;
   gridboard = [[0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0]];
}
function selectColumn(column){
    console.log(column);
    if (player==1){
        gridboard[5][column] = 1;
        player = 2;
        //document.getElementById()
    }
    else{
        gridboard[5][column] = 2;
        player = 1;
    }
    console.log(gridboard);
    refreshgridboard();
}

function refreshgridboard(){
    for (var row = 0; row<6; row++){
        for (var col=0;col<7;col++){
            if (gridboard[row][col]==0){
                document.getElementById("cell"+row+col).style.setProperty("background-color","#FFFFFF");
            } else if (gridboard[row][col]==1) { 
                document.getElementById("cell"+row+col).style.setProperty("background-color","#FFFF00");
            } else if (gridboard[row][col]==2) { 
                document.getElementById("cell"+row+col).style.setProperty("background-color","#FF0000");
            }
        }
    }
}