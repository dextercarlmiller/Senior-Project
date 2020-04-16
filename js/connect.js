var gridboard = [];
var player = 1;
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
    document.getElementById("AlertConnectWinner").innerText = "Player Turn: Yellow";
    refreshgridboard();
}
//Drops player move in corresponding column and updates next player
//Refresh display
//Alerts if there is a winner
function selectColumn(box) {
    try{
    column = (box.target.id%10);
    }catch(err){
        column = box;
        console.log("selected: "+column);
    }
    if(!columnFull(gridboard, column)){
        drop(column, player, gridboard);
        if (player == 1){
            player = 2;
            document.getElementById("AlertConnectWinner").innerText = "Player Turn: Red";
        }
        else{
            player = 1;
            document.getElementById("AlertConnectWinner").innerText = "Player Turn: Yellow";
        }    
    }
    refreshgridboard();
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
function columnFull(gridboard, columnselect){
    if (gridboard[0][columnselect] == 1 || gridboard[0][columnselect] == 2){
        var Full = true;
    }else{
        Full = false;
    }
    return Full; 
}
//drops the play down the column, returns updated board
function drop(col, player, connectboard) {
    let tempboard = connectboard;
    for (var row = 5; row >= 0; row--) {
        if (tempboard[row][col] == 0) {
            tempboard[row][col] = player;
            console.log(tempboard);
            return tempboard;
        }
    }
}
//returns true if the board is full
function checkConnectFull(gridboard){
    for(var col = 0; col < 7; col++){
        if (gridboard[0][col] == 0){
            var Full = false;
            return Full;
        }else {
            Full = true;
        }
    }
    return Full;
}
//returns true if there is a win
function checkConnectWin(gridboard) {
    Winner = false;
    //win in - direction
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
    //win in | direction
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
    //win in \ direction
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
    //win in / direction
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
    if (!checkConnectWin(Connectboard)&&checkConnectFull(Connectboard)){
        var draw = true; 
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
        document.getElementById("AlertConnectWinner").innerText = (ConnectWinner+" is the winner!");
        endconnect();
    }
    if (checkConnectDraw(ConnectBoard)) {
        document.getElementById("AlertConnectWinner").innerText = ("There is a Draw!");
        endconnect();
    }    
}
//removes buttons (eventlisteners) on the board
function endconnect(){
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++){ 
            document.getElementById(""+row+col).removeEventListener("click",selectColumn,true);
        }
    }
}
function ConnectComp(){
best_column = alphabeta(gridboard,player);
selectColumn(best_column);
}
function alphabeta(theboard,alpha){

//valid locations
let valid_locations = [];
    for(var i = 0;i<7;i++){
        if(!(columnFull(theboard,i))){
            valid_locations.push(i);
        }
    }

best_score = -1000
best_col = Math.floor((Math.random()*6)+0);
    for(var i = 0; i < valid_locations.length; i++){
        let tempboard = theboard;
        tempboard = 
        score_position = score(tempboard,alpha);
    }
            //depth++;
            //let tempboard = theboard;
            //tempboard = drop(i,alpha,tempboard);
//            score_position = score(drop(i,alpha,theboard),alpha);
            // if (score_position > best_score){
            //     best_score = score_position
            //     best_col = i;
            // }
    return best_col;
}


//variables:
//player: the player to score
//return an integer representing the sore of a given player
function score(board,player){
   let score_position = 0;
    //win in - direction
   for(row=0;row<6;row++){
    for (col=0;col<4;col++){
        if (board[row][col] == board[row][col+1] 
            && board[row][col+1] == board[row][col+2]  
            && board[row][col+2] == board[row][col+3]){
            if (board[row][col] == player){
                score_position = 100;      
                }  
            }
        else if (board[row][col] == board[row][col+1] 
            && board[row][col+1] == board[row][col+2]){
            if(board[row][col] == player){
                score_position = 10;
                }
            }
        }        
    }
    console.log("Score: "+score_position);
return score_position;
}