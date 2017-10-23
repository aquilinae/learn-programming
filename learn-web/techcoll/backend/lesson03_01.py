# Таск 01
'''
Ввести число и вывести отрицательное оно или положительное
'''

def zero_attitude(number):
    if number > 0:
        message = "Your number is higher than 0"
    elif number < 0:
        message = "Your number is lesser than 0"
    else:
        message = "Your number is zero"
    return message

number = input("Enter a number or 'exit': ")
while not number.isalpha():
    print(zero_attitude(int(number)))
    number = input("Enter a number: ")

'''
if number > 0:
    print("Your number is higher than 0")
elif number < 0:
    print("Your number is lesser than 0")
else:
    print("Your number is zero")
'''
