from tkinter import *
from pynput.mouse import Listener

def on_move(x, y):
    print ("Mouse moved")

def on_click(x, y, button, pressed):
    print ("Mouse clicked")

def on_scroll(x, y, dx, dy):
    print ("Mouse scrolled")

master = Tk() 
master.title("Tic Tac Toe")
w = Canvas(master, width=200, height=200) 
w.pack() 
canvas_height=200
canvas_width=200
x = int(canvas_width * 1/3) 
x1 = int(canvas_width * 2/3)
y = int(canvas_height * 1/3) 
y1 = int(canvas_height * 2/3)
w.create_line(0, y, canvas_width, y ) 
w.create_line(0, y1, canvas_width, y1 ) 
w.create_line(x,0, x, canvas_height ) 
w.create_line(x1, 0, x1,canvas_height)
mainloop() 