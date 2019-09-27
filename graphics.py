from tkinter import *
class boardgui:
    def __init__(self, master,board):
        self.master = master
        b1 = "_"
        b2 = "_"
        b3 = "_"
        b4 = "_"
        b5 = "_"
        b6 = "_"
        b7 = "_"
        b8 = "_"
        b9 = "_"
        master.title("Tic-Tac-Toe")
        master.geometry("240x302")
        self.button1 = Button(master,text=b1, command=self.b1(board),width=10,height=6)
        self.button2 = Button(master,text=b2, command=master.quit,width=10,height=6)
        self.button3 = Button(master,text=b3, command=master.quit,width=10,height=6)
        self.button4 = Button(master,text=b4, command=master.quit,width=10,height=6)
        self.button5 = Button(master,text=b5, command=master.quit,width=10,height=6)
        self.button6 = Button(master,text=b6, command=master.quit,width=10,height=6)
        self.button7 = Button(master,text=b7, command=master.quit,width=10,height=6)
        self.button8 = Button(master,text=b8, command=master.quit,width=10,height=6)
        self.button9 = Button(master,text=b9, command=master.quit,width=10,height=6)               
        self.button1.grid(column=0,row=0)
        self.button2.grid(column=0,row=1)
        self.button3.grid(column=0,row=2)
        self.button4.grid(column=1,row=0)
        self.button5.grid(column=1,row=1)
        self.button6.grid(column=1,row=2)
        self.button7.grid(column=2,row=0)
        self.button8.grid(column=2,row=1)
        self.button9.grid(column=2,row=2)

    def setBoardArray():
        b1 = "_"
        b2 = "_"
        b3 = "_"
        b4 = "_"
        b5 = "_"
        b6 = "_"
        b7 = "_"
        b8 = "_"
        b9 = "_"
    
    def b1(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
    def b2(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
    def b3(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
    def b4(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
    def b5(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]             
    def b6(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]] 
    def b7(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]] 
    def b8(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]
    def b9(self,n):
        boardgui.b1 = "X"
        n = n + [[1, 0, 0], 
             [0, 0, 0],
             [0, 0, 0]]                                     