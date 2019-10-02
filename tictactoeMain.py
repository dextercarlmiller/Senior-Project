import graphics as graphics
import gameFunctions as game
import wx

game = game.ticTacToe
gui = graphics.boardgui

class MyFrame(wx.Frame):
    """ We simply derive a new class of Frame. """

    def __init__(self, parent, title):
        wx.Frame.__init__(self, parent, title=title, size=(300, 300))
        self.control = wx.TextCtrl(self, style=wx.TE_MULTILINE)
        self.Show(True)
        self.CreateStatusBar()
        filemenu=wx.Menu()

        menuItem = filemenu.Append(wx.ID_ABOUT, "&About"," Information about this program")
        filemenu.AppendSeparator()
        filemenu.Append(wx.ID_EXIT,"Exit"," Terminate the program")

        menuBar = wx.MenuBar()
        menuBar.Append(filemenu,"&File")
        self.SetMenuBar(menuBar)
        self.Show(True)
        self.Bind(wx.EVT_MENU,self.OnAbout,menuItem)

    def OnAbout(self,event):
        print("hello world")
app = wx.App(False)
frame = MyFrame(None, 'Small editor')
app.MainLoop()
