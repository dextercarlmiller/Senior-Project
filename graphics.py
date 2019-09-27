from tkinter import *
class boardgui:
    def __init__(self, master,board):
        self.master = master
        master.title("Tic-Tac-Toe")
        master.geometry("240x302")
        B1 = "_"
        B2 = "_"
        B3 = "_"
        B4 = "_"
        B5 = "_"
        B6 = "_"
        B7 = "_"
        B8 = "_"
        B9 = "_"
        button1 = Button(master,text=B1, command=self.b1(board),width=10,height=6).grid(column=0,row=0)
        button2 = Button(master,text=B2, command=master.quit,width=10,height=6).grid(column=0,row=1)
        button3 = Button(master,text=B3, command=master.quit,width=10,height=6).grid(column=0,row=2)
        button4 = Button(master,text=B4, command=master.quit,width=10,height=6).grid(column=1,row=0)
        button5 = Button(master,text=B5, command=master.quit,width=10,height=6).grid(column=1,row=1)
        button6 = Button(master,text=B6, command=master.quit,width=10,height=6).grid(column=1,row=2)
        button7 = Button(master,text=B7, command=master.quit,width=10,height=6).grid(column=2,row=0)
        button8 = Button(master,text=B8, command=master.quit,width=10,height=6).grid(column=2,row=1)
        button9 = Button(master,text=B9, command=master.quit,width=10,height=6).grid(column=2,row=2)               

    def b1(self,n):
        B1 = "X"
        print("Made it ")
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