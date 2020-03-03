var gridboard = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];
var Winner = false; 
const Red = "1";
const Yellow = "2";
var turnValue = 1;
const connectcells = document.querySelectorAll(".connectcell")

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
    console.log(gridboard);
    for (var i = 0; i<6; i++){
        if (gridboard[i[column]] = 0 && gridboard[(i+1)[column]]){
            gridboard[i[column]] = 1
        }
    }
}