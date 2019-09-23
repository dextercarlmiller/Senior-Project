
class ticTacToe: 
    board = [[2, 1, 1], 
             [1, 2, 2],
             [2, 1, 1]]
    def setBoardArray():
        #this fills the array and initializes it
        #We should do a vector to make it easier to iterate through!
        board = [[0, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
        return board
    def printBoard(n):
        # this prints the board in ascii
        # what type of graphics can i do? 
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
        # this function checks if there are 3 elements in a row that are equal
        # done by a lot of else if statements. 
        # Returns an int 1 or 0
        # iterative checking? 
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
        #This function is going to return true if the board is full
        #If not the board will be empty
        full = True
        for i in range(0,3):
            for j in range(0,3):
                if n[i][j] == 0:
                    full = False
        return full
    def checkCatGame(self,n):
        # If board is filled and no win = cats game
        # this iterates through the whole array setting the bool value
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