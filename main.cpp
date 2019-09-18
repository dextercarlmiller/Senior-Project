#include "connect.h"

using namespace std;

int main()
{
connect game;
state winner;
int choice;
do{
game.setPoopArray();
game.printBoard();
do {
game.player1Turn();
game.printBoard();
if(game.CheckWin(winner) == true) {
        break;
}
game.player2Turn();
if (game.checkTie()){
        cout << "It's a tie Game!" << endl;
        break;}
game.printBoard();
} while(!game.CheckWin(winner));
if(!game.checkTie()){
if(winner == X)
        cout << "Player 1 Wins!" << endl;
else
        cout << "Player 2 Wins!" << endl;
}
cout << "Do you want to play again?"<< endl;
cout << "1:Yes" << endl << "2:No" << endl;
cout << "Please enter the integer value: ";
cin >> choice;
} while(choice == 1);
return 0;
}
