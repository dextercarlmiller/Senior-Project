import graphics as graphics
import gameFunctions as game
import wx
import wx.lib.buttons as buttons

game = game.ticTacToe
board = game.board
app = wx.App(False)
frame = graphics.TicTacToeFrame()
app.MainLoop()
