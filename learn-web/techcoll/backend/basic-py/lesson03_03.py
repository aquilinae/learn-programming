# Таск 3
'''
Написать функцию, которая возводит число в квадрат. Опционально, несколько квадратов.
'''

def squares(number):
    print("Square: {}\nDouble square: {}\nTriple square: {}".format(pow(number, 2), pow(number, 4), pow(number, 8)))

number = int(input("Enter a number to square: "))
squares(number)
