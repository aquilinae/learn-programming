class Programmer():
    def __init__(self):
        self.programmer = True
        self.frontend = False
        self.backend = False

    def print_info(self):
        print("Can programming:", self.programmer)
        print("Can frontend:", self.frontend)
        print("Can backend:", self.backend)

class FrontEndProgrammer(Programmer):
    def __init__(self):
        super().__init__()
        self.frontend = True


class BackEndProgrammer(Programmer):
    def __init__(self):
        super().__init__()
        self.backend = True

class FullStack(FrontEndProgrammer, BackEndProgrammer):
    pass

'''
person1 = Programmer()
person1.print_info()
print()

person2 = FrontEndProgrammer()
person2.print_info()
print()

person3 = BackEndProgrammer()
person3.print_info()
print()

person4 = FullStack()
person4.print_info()
print()
'''

person1 = Programmer()
person2 = FullStack()

print(type(person2))
