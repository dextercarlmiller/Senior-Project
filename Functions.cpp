#include "connect.h"

void connect::setPoopArray()
{
        for (int i=0; i < 6; i++)
                for (int j = 0; j<7; j++)
                        poop[i][j] = EMPTY;
}

void connect::printBoard()
{
cout << " | 1 | 2 | 3 | 4 | 5 | 6 | 7 |"<< endl;
 cout << " -----------------------------" << endl;
        for(int i = 0; i < 6; i++)
        {
                for(int j = 0; j < 7; j++)
                {
                        cout << " | ";
                        if(poop[i][j] == EMPTY)
                                cout << " ";
                        else if (poop[i][j] == X)
                                cout << "X";
                        else if (poop[i][j] == O)
                                cout << "O";
                }
                cout << " |";
                cout << endl << " -----------------------------" << endl;
        }

}

void connect::drop(int col, state s)
{
        if(poop[0][col] != EMPTY)
        {
        cout <<"Please enter a correct value!"<<endl;
                if(s == X)
                        player1Turn();
                if(s == O)
                        player2Turn();
        } else {
                for(int i = 0; i < 6; i++)
                {
                        if(poop[i][col] != EMPTY) {
                                poop[i - 1][col] = s;
                                return;
                        }
                }
                poop[5][col] = s;
        }
}

void connect::player1Turn()
{
        int col;
        do {
        cout << "Player 1 turn!" << endl;
        cout << "Please enter a column number to drop your value: ";
        cin >> col;
        col = static_cast<int>(col);
        } while(col >= 8 || col <= 0);
        drop(col -1,X);
}
void connect::player2Turn()
{
        int col;
        do {
        cout << "Player 2 turn!" << endl;
        cout << "Please enter a column number to drop your value: ";
        cin >> col;
        col = static_cast<int>(col);
        } while(col >= 8 || col <= 0);
        drop(col -1,O);
}

bool connect::checkTie()
{
for(int i=0; i<6; i++){
        for (int j=0;j<7;j++){
                if(poop[i][j] == EMPTY){
                        return false;
                }
        }
}
return true;
}
bool connect::CheckWin(state& s) {
        //check horizontally
        for(int i = 0; i < 6; i++) {
                for(int j = 0; j < 4; j++) {
                        if(poop[i][j] == poop[i][j + 1] &&
                                poop[i][j+1] == poop[i][j + 2] &&
                                poop[i][j+2] == poop[i][j + 3] &&
                                poop[i][j] != EMPTY) {
                                s = poop[i][j];
                                return true;
                        }
                }
        }
        //check vertically
        for(int j = 0; j<7; j++){
                for(int i = 0; i<3;i++){
                        if(poop[i][j] == poop[i+1][j] &&
                                poop[i+1][j] == poop[i+2][j] &&
                                poop[i+2][j] == poop[i+3][j] &&
                                poop[i][j] != EMPTY){
                                s = poop[i][j];
                                return true;
                        }
                }
        }
        //check backward diagonally
                for(int i = 0; i < 3; i++) {

        for(int j = 0; j < 4; j++) {
                        if(poop[i][j] == poop[i+1][j+1] &&
                                poop[i+1][j+1] == poop[i+2][j+2] &&
                                poop[i+2][j+2] == poop[i+3][j+3] &&
                                poop[i][j] != EMPTY) {
                                s = poop[i][j];
                                return true;
                        }
                }
        }
        //check forward diagonally
        for(int j = 3; j < 7; j++) {
                for(int i = 0; i < 3; i++) {
                        if(poop[i][j] == poop[i+1][j-1] &&
                                poop[i+1][j-1] == poop[i+2][j-2] &&
                                poop[i+2][j-2] == poop[i+3][j-3] &&
                                poop[i][j] != EMPTY) {
                                s = poop[i][j];
                                return true;
                        }
                }
        }
        return false;
}
