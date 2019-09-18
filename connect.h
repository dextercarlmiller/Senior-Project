// This is the header file for my connect4
enum state {X,O,EMPTY}

class connect
{
public:

void setPoopArray();
// this will set my poop array to all values of " "

void printBoard();
// This function prints out the game board

void player1Turn();
// This function implements the player to take a turn.
// this will use the function drop.
void player2Turn();
// This is the same as player 1's turn but using O's instead of X's

void drop(int col, state s);
// this function helps players take their turn dropping their turn.

bool checkTie();
// This function will happen after player 2's turn, because a tie will happen right after
// their turn.

bool CheckWin(state& s);
//This function will check to for a win and return a bool value of true or false.

private:

int column;
// this will be the players choice of which COLUMN to use.

state poop[6][7];
// this contains the cell value for each place in the board

};

