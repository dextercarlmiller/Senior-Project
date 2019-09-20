//this is the header file for my tictactoe game
#include <iostream>
#include <iomanip>
#include <string>

class ticTacToe
{
public:

//ticTacToe();
//Default constructor

void setPoopArray();
//This sets my poop array! ;)

void printBoard();
//This function will print the board along with the array.

void player1Turn();
//This function will implement the player1's choice in poop array

void player2Turn();
//This function will implement the player2's choice in poop array

int checkWin(int& math);
//This function will check to see if there is three in a row

bool checkCatGame();
//This function will check to see if there is a cat's game

private:

std::string poop[9];
int choice;
int calc;

};