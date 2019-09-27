import graphics as graphics
import gameFunctions as game
from tkinter import *

game = game.ticTacToe
root = Tk()
my_gui = graphics.boardgui(root,game.board)
root.mainloop()