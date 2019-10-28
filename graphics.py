import gameFunctions as game
import wx.lib.buttons as buttons
import wx
Turn =1   
Label = " "
class TicTacToeFrame(wx.Frame):
    def __init__(self):
        title = "Tic-Tac-Toe"
        wx.Frame.__init__(self,parent =None,title=title,size=(400,400))
        gameMenu = wx.Menu()
        menuBar = wx.MenuBar()
        menuBar.Append(gameMenu,"Game") 
        TTT = gameMenu.Append(101,"Tic-Tac-Toe","Tic-Tac-Toe")
        test = gameMenu.Append(102, "Connect 4", "Connect 4")
        gameMenu.Append(wx.ID_ABOUT, "Snake","Snake")
        exitMenuItem = gameMenu.Append(wx.ID_EXIT,"Exit","Close")     
        self.Bind(wx.EVT_MENU,self.TicTacToe,TTT)
        self.Bind(wx.EVT_MENU,self.TicTacToe,test)
        self.Bind(wx.EVT_MENU,self.onExit,exitMenuItem)
        self.SetMenuBar(menuBar) 

        self.Show() 


    def TicTacToe(self,event):
        panel = TTTPanel(self)
        panel.Show()          

    def onExit(self,event):
        self.Close()
    
class TTTPanel(wx.Panel):
    def __init__(self,parent):
        wx.Panel.__init__(self,parent,size=(600,600))
        self.toggled = False
        self.BoardSetup()
        print("hello world")
    def BoardSetup(self):
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
        draw = False
        global Turn
        button_id = button.GetId()
        print(button_id)
        gamefunctions.PlayerTurn(gamefunctions,button_id,board)
        print(board)
