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
    if (player == 1){
        alpha = 1 //maximizer
        beta = 2  //minimizer
    }else{  
        alpha = 2  
        beta = 1 
    }
    best_column = alphabeta(gridboard,5,alpha,beta,true);
    selectColumn(best_column);
}
function isterminal_node(theboard,alpha,beta){
    return checkConnectWinner(theboard,alpha) || checkConnectWinner(theboard,beta);
}
function alphabeta(theboard,depth,alpha,beta,maximizingplayer){
    //copy to the tempboard
    let tempboard = theboard.map(inner => inner.slice());
    //get valid locations
    var valid_locations = [];
    for(var i = 0;i<7;i++){
        if(!(columnFull(tempboard,i))){
            valid_locations.push(i);
        }
    }
    //is_terminal = isterminal_node(theboard,alpha,beta);
    if (depth == 0 || isterminal_node(theboard,alpha,beta)){
        if(isterminal_node(theboard,alpha,beta)){
            if (checkConnectWinner(theboard,alpha)){ //alpha is the maximizer
                return 10000000;
            }else if (checkConnectWinner(theboard,beta)){
                return -10000000;
            }else{
                return 0;
            }
        }else{//depth is zero
            return score(tempboard,alpha);      
        }
    }

    if (maximizingplayer){
        var value = -Infinity;
        var column = valid_locations[Math.floor(Math.random()*valid_locations.length)];
        for(var i = 0; i < valid_locations.length; i++){
        //copy the tempboard
        var b_copy = tempboard.map(inner => inner.slice());
            b_copy = drop(valid_locations[i],alpha,tempboard);
            column,score_position = alphabeta(tempboard,depth-1,alpha,beta,false)
            if(score_position>value){
                value = score_position;
                var best = valid_locations[i];
            }
        }
    }else{
        var value = Infinity;
        var column = valid_locations[Math.floor(Math.random()*valid_locations.length)];
        for(var i = 0; i < valid_locations.length; i++){
        //copy the tempboard
        var c_copy = tempboard.map(inner => inner.slice());
            c_copy = drop(valid_locations[i],beta,tempboard);
            score_position = alphabeta(tempboard,depth-1,alpha,beta,true)
            if(score_position<value){
                value = score_position;
                var best = valid_locations[i];
            }        
        }
    }
    return best;
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
    best_score = -10000000;
    var best_column = 0;
    for(var i = 0; i < valid_locations.length; i++){
        var b_copy = tempboard.map(inner => inner.slice()); 
        b_copy = drop(valid_locations[i],theplayer,b_copy);
        score_position = score(b_copy,theplayer);
                
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
if (player == 1){
    player = 1;
    var opponent = 2;
}else{
    player = 2;
    opponent = 1;
}
var score_position = 0;

    //Center column score
    var center_array = [];
    for(row=0;row<6;row++){
        center_array.push(board[row][3]);   
    }
    var center_count = center_array.count(player);
    score_position += center_count*3;


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
                        score_position += 100;
                    }
            }
            if(window_array.count(player) == 3 && window_array.count(0) == 1){
                score_position += 5;
            }
            if(window_array.count(player) == 2 && window_array.count(0) == 2){
                score_position += 2;
            }
            if(window_array.count(opponent) == 3 && window_array.count(0) == 1){
                score_position -= 80
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
                            score_position += 100;
                    }
                }   
                if(window_array.count(player) == 3 && window_array.count(0) == 1){
                    score_position += 5;
                }
                if(window_array.count(player) == 2 && window_array.count(0) == 2){
                    score_position += 2;
                }
                if(window_array.count(opponent) == 3 && window_array.count(0) == 1){
                    score_position -= 80
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
                            score_position += 100;
                    }
                }   
                if(window_array.count(player) == 3 && window_array.count(0) == 1){
                    score_position += 5;
                }
                if(window_array.count(player) == 2 && window_array.count(0) == 2){
                    score_position += 2;
                }
                if(window_array.count(opponent) == 3 && window_array.count(0) == 1){
                    score_position -= 80
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
                            score_position += 100;
                    }
                }   
                if(window_array.count(player) == 3 && window_array.count(0) == 1){
                    score_position += 5;
                }
                if(window_array.count(player) == 2 && window_array.count(0) == 2){
                    score_position += 2;
                }
                if(window_array.count(opponent) == 3 && window_array.count(0) == 1){
                    score_position -= 80
                }
        }
    }        
return score_position
}