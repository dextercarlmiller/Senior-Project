
class ticTacToe: 
    board = [[0, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
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
    def checkWin():
        # this function checks if there are 3 elements in a row that are equal
        # done by a lot of else if statements. 
        # Returns an int 1 or 0
        # iterative checking? 
        win = False
        return win
    def isFull(n):
        #This function is going to return true if the board is full
        #If not the board will be empty
        for i in range(1,3):
            for j in range(1,3):
                print("({},{})",i,j)
    def checkCatGame():
        # If board is filled and no win = cats game
        # this iterates through the whole array setting the bool value
        # is filled function?
        catGame = False
        return catGame 
game = ticTacToe
Board = game.board
game.isFull(Board)
print(game.printBoard(Board))
