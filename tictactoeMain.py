import graphics as graphics
import gameFunctions as game
from tkinter import *

game = ticTacToe.board
root = Tk()
my_gui = graphics.boardgui(root,game)
root.mainloop()