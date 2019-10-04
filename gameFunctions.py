
class ticTacToe: 
    board = [[1, 2, 3], 
             [4, 5, 6],
             [7, 8, 9]]
    Turn = 1
    def PlayerTurn(self,n,CellID,turn):
        for i in range(0,3):
            for j in range(0,3):
                if CellID == n[i][j]:
                    if n==1:
                        n[i][j] = "X"
                        print(n[i][j])
                    if n==2:
                        n[i][j] = "O"
                    turn = ticTacToe.ChangeTurn(self,turn)    
        return n

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
                if n[i][j] == 0:
                    full = False
        return full
    def checkCatGame(self,n):
        catGame = False
        if self.isFull(n) and not self.checkWin(n):
            catGame = True
        return catGame 

