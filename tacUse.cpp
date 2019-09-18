#include "tic.h"
using namespace std;
int main()
{
ticTacToe game;
int choice = 1;
int loop = 0;
int poop;

do
{
game.setPoopArray();
loop = 0;
game.printBoard();

while(loop != 1)
        {
        game.player1Turn();
        game.printBoard();
        game.checkWin(loop);
        if(loop != 0)
                break;
        if(game.checkCatGame())
        {
                cout << "Cat's game!" << endl;
                break;
        }
        game.player2Turn();
        game.printBoard();
        game.checkWin(loop);
        }
cout << "Would you like to play again?" << endl;
cout << "1: Yes" << endl << "2: No" << endl;
cout << "Please enter the integer value: ";
cin >> choice;
}
while(choice == 1);
return 0;
}
