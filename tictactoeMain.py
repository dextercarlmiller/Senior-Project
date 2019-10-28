import graphics as graphics
import gameFunctions as game
import wx


game = game.ticTacToe
board = game.board
app = wx.App(False)
frame = graphics.TicTacToeFrame()
app.MainLoop()