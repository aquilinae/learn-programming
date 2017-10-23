# Таск 2
'''
Ввести строку и вывести для каждого символа по три его копии
'''

nstring = ''
string = input("Enter short string: ")
for char in string:
    print(char * 3) # Вывод построчно
    nstring += char
print(nstring)
