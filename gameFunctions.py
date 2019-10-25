
class ticTacToe: 
    board = [[1, 2, 3], 
             [4, 5, 6],
             [7, 8, 9]]
    def PlayerTurn(self,CellID,board):
        dontDraw = False
        for i in range(0,3):
            for j in range(0,3):
                if CellID == board[i][j]:
                    board[i][j] = "X"
                    print(board[i][j])


    def spacePlayed(self,space):
        if space == "X" or space == "O":
            return False
        return True
    def ChangeTurn(self,n):
        if n == 1:
            n=2
            return n
        if n ==2:
            n=1
            return n
    def checkWin(self,n):
        win = False
        #Horizontal
        for i in range(0,3):
            j = 0
            if n[i][j] == n[i][j+1] and n[i][j] == n[i][j+2]:
                if n[i][j] != 0:
                    win = True
        #Vertical
        for j in range(0,3):
            i = 0
            if n[i][j] == n[i+1][j] and n[i][j] == n[i+2][j]:
                if n[i][j] != 0:
                    win = True
        #Diagonal
        if n[0][0] == n[1][1] and n[0][0] == n[2][2]:
            if n[0][0] != 0:
                win = True
        if n[2][0] == n[1][1] and n[2][0] == n[0][2]:
            if n[2][0] != 0:
                win = True
        return win
    def isFull(self,n):
        full = True
        for i in range(0,3):
            for j in range(0,3):
                for k in range(1,10):
                    if n[i][j] == k:
                        full = False
        return full
    def checkCatGame(self,n):
        catGame = False
        if self.isFull(self,n) and (not self.checkWin(self,n)):
            catGame = True
        return catGame 
    def BoardReset(self,n):
        n = [[1, 2, 3], 
             [4, 5, 6],
             [7, 8, 9]]
        return n