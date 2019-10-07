import gameFunctions as game
import wx.lib.buttons as buttons
import wx

class TicTacToeFrame(wx.Frame):
    def __init__(self,board):
        title = "Tic-Tac-Toe"
        size = (335,355)
        wx.Frame.__init__(self,parent =None,title=title,size=size)
        panel = TTTPanel(self,board)
        self.Show()
Turn =1   
Label = " "    
class TTTPanel(wx.Panel):

    def __init__(self,parent,board):
        wx.Panel.__init__(self,parent)
        self.toggled = False
        self.playerWon = False
        self.BoardSetup(board)
    def BoardSetup(self,board):
        mainSizer = wx.BoxSizer(wx.VERTICAL)
        self.fgSizer  = wx.FlexGridSizer(rows=3,cols=3,vgap=3,hgap=3)
        btnSizer = wx.BoxSizer(wx.HORIZONTAL)
        font = wx.Font(22,wx.FONTFAMILY_DEFAULT,wx.FONTSTYLE_NORMAL,wx.FONTWEIGHT_BOLD)
                
        size = (100,100)
        self.button1 = buttons.GenToggleButton(self,size=size,  name="btn1")
        self.button2 = buttons.GenToggleButton(self, size=size, name="btn2")
        self.button3 = buttons.GenToggleButton(self, size=size, name="btn3")
        self.button4 = buttons.GenToggleButton(self, size=size, name="btn4")
        self.button5 = buttons.GenToggleButton(self, size=size, name="btn5")
        self.button6 = buttons.GenToggleButton(self, size=size, name="btn6")
        self.button7 = buttons.GenToggleButton(self, size=size, name="btn7")
        self.button8 = buttons.GenToggleButton(self, size=size, name="btn8")
        self.button9 = buttons.GenToggleButton(self, size=size, name="btn9")
        self.normalBtnColour = self.button1.GetBackgroundColour()
 
        self.widgets = [self.button1, self.button2, self.button3,
                        self.button4, self.button5, self.button6, 
                        self.button7, self.button8, self.button9]

        for j in range(len(self.widgets)):
            self.widgets[j].SetFont(font)
            self.widgets[j].SetLabel("_")
            self.widgets[j].Id = self.widgets[j].Id + 31999
            self.widgets[j].Bind(wx.EVT_BUTTON,self.OnToggle)

        self.fgSizer.AddMany(self.widgets)
        mainSizer.Add(self.fgSizer,0,wx.ALL|wx.Center,5)
        self.SetSizer(mainSizer)

    def OnToggle(self,event):
        button = event.GetEventObject()
        gamefunctions = game.ticTacToe
        board = gamefunctions.board
        button_id = button.GetId()
        global Turn
        global Label
        board,Turn,Label = gamefunctions.PlayerTurn(gamefunctions,board,button_id,Turn,Label)
        if (not gamefunctions.checkWin(gamefunctions,board)) or (not gamefunctions.isFull(gamefunctions,board)):
            if not gamefunctions.checkCatGame(gamefunctions,board):
                button.SetLabel(Label)
        if gamefunctions.checkCatGame(gamefunctions,board):
            print("There is a Cat Game!")
        if gamefunctions.checkWin(gamefunctions,board):
            print("There is a win!")
        print(board)
       
def run(board):
    app = wx.App(False)
    frame = TicTacToeFrame(board)
    app.MainLoop()