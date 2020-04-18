let gridboard = [];
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
    refreshgridboard(gridboard);
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
    refreshgridboard(gridboard);
    AlertConnectWinner(gridboard,player);
}
//updates the board of the correct color
function refreshgridboard(gridboard) {
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
    var tempboard = connectboard;
    for (var row = 5; row >= 0; row--) {
        if (tempboard[row][col] == 0) {
            tempboard[row][col] = player;
            return tempboard;
        }
    }
}
function comprefresh(alpha,beta,tempboard){
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
        if (tempboard[row][col] == alpha){
            tempboard[row][col] = 0;
        }
        if (tempboard[row][col] == beta){
            tempboard[row][col] = 0;
        }
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
function checkConnectWinner(gridboard,theplayer) {
    Winner = false;
    //win in - direction
    for(row=0;row<6;row++){
        for (col=0;col<4;col++){
            if (gridboard[row][col] == gridboard[row][col+1] 
                && gridboard[row][col+1] == gridboard[row][col+2]  
                && gridboard[row][col+2] == gridboard[row][col+3]){
                    if((gridboard[row][col] == theplayer)){
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
                    if((gridboard[row][col] == theplayer)){
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
                    if((gridboard[row][col] == theplayer)){
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
                    if((gridboard[row][col] == theplayer)){
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
function isOdd(num){
    if (num%2==0){
        return false;
    }else{
        return true;
    }
}
function ConnectComp(){
    // if (player == 1){
    //     alpha = player+2 //odd (Yellow) 3
    //     beta = player+3   //even (Red) 4
    // }else{
    //     alpha = player+1  //odd (Yellow) 3
    //     beta = player+2 //even (Red) 4
    // }

    best_column = pick_best_move(gridboard, player);
    selectColumn(best_column);
}
function alphabeta(theboard,depth,alpha,beta,maxplayer){
//valid locations
    let valid_locations = [];
        for(var i = 0;i<7;i++){
            if(!(columnFull(theboard,i))){
                valid_locations.push(i);
            }
        }
//The terminal states
    // if (valid_locations.length == 0 || checkConnectWinner(theboard,alpha) || checkConnectWinner(theboard,beta)){
    //     if (checkConnectWinner(theboard,alpha)){
    //         return 10000000000;
    //     }else if (checkConnectWinner(theboard,beta)){
    //         return -10000000000;
    //     }else{
    //         return 0;
    //     }
    // }else{
    //     return score(theboard,alpha,beta);
    // }
// if(maxplayer){

//         tempboard = theboard;
//         best_score = -Infinity;
//         deepestDepth = 0;
//         best_col = -1;

//     for(var i = 0; i < valid_locations.length; i++){
//         let tempboard = theboard;
//         tempboard = drop(valid_locations[i],alpha,tempboard);
//         let next_move,depth = alphabeta(tempboard,(depth-1),alpha,beta,false);
        
        
//         next_move_score = score(next_move,alpha);
//                 // console.log("Score "+score_position);
//                 // console.log("Column " + valid_locations[i]);
//                 if (score_position > best_score){
//                     best_score = score_position;
//                     best_col = valid_locations[i];
//                 }
//             }
//             comprefresh(alpha,beta,tempboard);
//             return best_col;
// }
//     if (depth == 0 || checkConnectWin(theboard)){
//         if (checkConnectWin(theboard)){
//             return theboard,depth;
//         }
//     }
// }
    }

function pick_best_move(theboard,theplayer){
    let tempboard = theboard.map(inner => inner.slice());
    //valid locations
    var valid_locations = [];
        for(var i = 0;i<7;i++){
            if(!(columnFull(theboard,i))){
                valid_locations.push(i);
            }
        }
    best_score = -10000;
    var best_column = 0;
    for(var i = 0; i < valid_locations.length; i++){
        console.log(theplayer);
        tempboard = drop(valid_locations[i],theplayer,tempboard);
        score_position = score(tempboard,theplayer);
        
        console.log(tempboard);
        console.log("Score: "+ score_position);
        console.log("Column: "+valid_locations[i]);
        
        //comprefresh(theplayer,theopponent,tempboard);
        if (score_position>best_score){
            best_score = score_position;
            best_column = valid_locations[i];
        }
        //comprefresh(alpha,beta,tempboard);
    }
    return best_column;    
}

function score(board,player){
Array.prototype.count = function(nubmer) {
    var count = 0;
    for(var i = 0; i < this.length; ++i){
        if(this[i] == nubmer)
            count++;
    }
    return count;
}
var score_position = 0;
     //win in - direction
     for(row=0;row<6;row++){
        for (col=0;col<4;col++){
            var window_array = [];
            window_array.push(board[row][col]);
            window_array.push(board[row][col+1]);
            window_array.push(board[row][col+2]);
            window_array.push(board[row][col+3]);
            if(!window_array.includes(0)){
                if(window_array.includes(1) !== window_array.includes(2)){
                        score_position = 100;
                        return score_position;
                    }
            }
            if(window_array.count(player) == 3 && window_array.count(0) == 1){
                score_position = 5;
            }
            if(window_array.count(player) == 2 && window_array.count(0) == 2){
                score_position = 2;
            }
        }
    }

    //win in | direction
        for(row=0;row<3;row++){
            for (col=0;col<7;col++){
                var window_array = [];
                window_array.push(board[row][col])
                window_array.push(board[row+1][col])
                window_array.push(board[row+2][col])
                window_array.push(board[row+3][col])
                if(!window_array.includes(0)){
                    if(window_array.includes(1) !== window_array.includes(2)){
                            score_position = 100;
                            return score_position;
                    }
                }   
            if(window_array.count(player) == 3 && window_array.count(0) == 1){
                score_position = 5;
            }
            if(window_array.count(player) == 2 && window_array.count(0) == 2){
                score_position = 2;
            }
        }        
    }
    //win in \ direction
        for(row=0;row<3;row++){
            for (col=0;col<4;col++){
                var window_array = [];
                window_array.push(board[row][col])
                window_array.push(board[row+1][col+1])
                window_array.push(board[row+2][col+2])
                window_array.push(board[row+3][col+3])
                if(!window_array.includes(0)){
                    if(window_array.includes(1) !== window_array.includes(2)){
                            score_position = 100;
                            return score_position;
                    }
                }   
            if(window_array.count(player) == 3 && window_array.count(0) == 1){
                score_position = 5;
            }
            if(window_array.count(player) == 2 && window_array.count(0) == 2){
                score_position = 2;
            }
        }
    }                 
    //win in / direction
        for(row=0;row<3;row++){
            for (col=3;col<7;col++){
                var window_array = [];
                window_array.push(board[row][col])
                window_array.push(board[row+1][col-1])
                window_array.push(board[row+2][col-2])
                window_array.push(board[row+3][col-3])
                if(!window_array.includes(0)){
                    if(window_array.includes(1) !== window_array.includes(2)){
                            score_position = 100;
                            return score_position;
                    }
                }   
            if(window_array.count(player) == 3 && window_array.count(0) == 1){
                score_position = 5;
            }
            if(window_array.count(player) == 2 && window_array.count(0) == 2){
                score_position = 2;
            }
        }
    }        
return score_position;
}