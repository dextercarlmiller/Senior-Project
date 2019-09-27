from tkinter import *
from tic-tac-toe.py import *
class MyFirstGUI:
    def __init__(self, master):
        self.master = master
        master.title("Tic-Tac-Toe")
        master.geometry("240x302")
        self.button1 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button2 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button3 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button4 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button5 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button6 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button7 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button8 = Button(master,text="_", command=master.quit,width=10,height=6)
        self.button9 = Button(master,text="_", command=master.quit,width=10,height=6)               
        self.button1.grid(column=0,row=0)
        self.button2.grid(column=0,row=1)
        self.button3.grid(column=0,row=2)
        self.button4.grid(column=1,row=0)
        self.button5.grid(column=1,row=1)
        self.button6.grid(column=1,row=2)
        self.button7.grid(column=2,row=0)
        self.button8.grid(column=2,row=1)
        self.button9.grid(column=2,row=2)

    def greet(self):
        print("Greetings!")

root = Tk()
my_gui = MyFirstGUI(root)
root.mainloop()