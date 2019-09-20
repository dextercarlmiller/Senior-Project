//Dexter's TicTacToe functions defined
#include "tic.h"

void ticTacToe::setPoopArray()
{
choice = 0;
calc = 0;

poop[0] = "7";
poop[1] = "8";
poop[2] = "9";

poop[3] = "4";
poop[4] = "5";
poop[5] = "6";

poop[6] = "1";
poop[7] = "2";
poop[8] = "3";
}

void ticTacToe::printBoard()
{
cout << endl;
cout << setw(4) << poop[0] <<setw(4)<< "|";
cout << setw(4) << poop[1] <<setw(4)<< "|";
cout << setw(4) << poop[2] << endl;
cout << "-------" << "+" << "-------" << "+" << "-------" << endl;
cout << setw(4) << poop[3] <<setw(4)<< "|";
cout << setw(4) << poop[4] <<setw(4)<< "|";
cout << setw(4) << poop[5] << endl;
cout << "-------" << "+" << "-------" << "+" << "-------" << endl;
cout << setw(4) << poop[6] <<setw(4)<< "|";
cout << setw(4) << poop[7] <<setw(4)<< "|";
cout << setw(4) << poop[8] << endl;
cout << endl;
}

void ticTacToe::player1Turn()
{
        do{
                cout << "Player 1 please pick a value:";
                cin >> choice;
        switch (choice){
        case 1:
                {
                        calc = (choice + 5);
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 2:
                {
                        calc = (choice + 5);
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 3:
                {
                        calc = choice + 5;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 4:
                {
                        calc = choice -1;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 5:
                {
                        calc = choice -1;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 6:
                {
                        calc = choice -1;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 7:
                {
                        calc = choice -7;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 8:
                {
                        calc = choice - 7;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        case 9:
                {
                        calc = choice - 7;
                        if(poop[calc] == "O")
                                break;
                        poop[calc] = "X";
                        break;
                }
        defalult:
                break;
        }// switch
        }while(choice > 9 || choice < 1);
}
void ticTacToe::player2Turn()
{
        do{
                cout << "Player 2 please pick a value:";
                        cin >> choice;
        switch (choice){
        case 1:{
                        calc = (choice + 5);
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 2:{
                        calc = choice + 5;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 3:{
                        calc = choice + 5;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 4:{
                        calc = choice -1;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 5:{
                        calc = choice -1;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 6:{
                        calc = choice -1;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 7:{
                        calc = choice -7;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 8:{
                        calc = choice - 7;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        case 9:{
                        calc = choice - 7;
                        if(poop[calc] == "X")
                                break;
                        poop[calc] = "O";
                        break;}
        defalult:
                break; }// switch
        }while(choice > 9 || choice < 1);
}
bool ticTacToe::checkCatGame()
{
bool cat = true;
for(int i = 0; i < 9; i++ )
        {
                if(poop[i] != "X" && poop[i] != "O")
                        {
                                cat = false;
                        }
        }
return cat;
}

int ticTacToe::checkWin(int& math)
{
if (poop[0]==poop[1]&&poop[1]==poop[2])
        {
        if (poop[1] == "X")
                {
                        cout << "Player 1 Wins!"<< endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[3]==poop[4]&&poop[4]==poop[5])
        {
        if (poop[4] == "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[6]==poop[7]&&poop[7]==poop[8])
        {
        if (poop[7] == "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[0]==poop[3]&&poop[3]==poop[6])
        {
        if (poop[3] == "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[1]==poop[4]&&poop[4]==poop[7])
        {
        if (poop[4] == "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[2]==poop[5]&&poop[5]==poop[8])
        {
        if (poop[5]== "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[0]==poop[4]&&poop[4]==poop[8])
        {
        if (poop[4]== "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else if (poop[2]==poop[4]&&poop[4]==poop[6])
        {
        if (poop[4] == "X")
                {
                        cout << "Player 1 Wins!" << endl;
                        math = 1;
                        return math;
                }
        else
                {
                        cout << "Player 2 Wins!" << endl;
                        math = 1;
                        return math;
                }
        }
else
{
math = 0;
return math;
}
}
