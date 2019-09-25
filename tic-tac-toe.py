class ticTacToe: 
    board = [[2, 1, 1], 
             [1, 2, 2],
             [2, 1, 1]]
    def setBoardArray():
        board = [[0, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
        return board
    def printBoard(n):
        return n
    def player1Turn():
        # this goes through a do while loop, until the input is correct
        # given correct input, it goes through a case switch, checking and setting place value
        # Do i have to write a long switch, or can i iterate through? 
        return board
    def player2Turn():
        # Same as player 1 but sets value to O
        # same as player 1 
        return board
    def checkWin(n):
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
    def isFull(n):
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
game = ticTacToe
Board = game.board
print(game.isFull(Board))
print(game.checkWin(Board))
print(game.printBoard(Board))
print(game.checkCatGame(game,Board))