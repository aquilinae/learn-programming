class Ninja:
    def __init__(self, rival='TOASTY'):
        self.costume_color = 'red'
        self.ability_type = 'telekinesis'
        self.fatality = "telekinetic desintegration"
        self.special = "error macros"

    def describe_fighter(self):
        print("Ninja in", self.costume_color.upper(), "is ready to MORTAL KOMBAT!")
        print("He can END U with", self.ability_type.title())
        print("Be ready to the", self.fatality.title())
        print(self.special.upper())

    def welcome_you_rival(self):
        print(self.rival.upper(), '!!!')
        print("YOUR DEATH IS HERE")
        print(self.special.upper())

class Scorpion(Ninja):
    def __init__(self, rival='Sub-Zero'):
        super().__init__()
        self.costume_color = "yellow"
        self.ability_type = "fire"
        self.fatality = "molten dodge"
        self.special = "get over here!"
        self.rival = rival

    def scorpion_attack(self):
        print(self.fatality.title(), 'burns with', self.ability_type.title())

class SubZero(Ninja):
    def __init__(self, rival='Scorpion'):
        super().__init__()
        self.costume_color = "blue"
        self.ability_type = "ice"
        self.fatality = "deep freeze"
        self.special = "ice ice baby"
        self.rival = rival

    def subzero_attack(self):
        print(self.fatality.title(), 'freezes with', self.ability_type.title())

class Reptile(SubZero, Scorpion):
    '''
    def __init__(self, rival='stupid programmers'):
        super().__init__()
        self.costume_color = "green"
        self.ability_type = "acid"
        self.fatality = "poison kiss"
        self.special = "where is my tale"
        self.rival = rival
    '''
    pass

print('\n01 FIRST\n')
ermak = Ninja()
ermak.describe_fighter()
print('\n02 SECOND\n')
scorpion = Scorpion()
scorpion.describe_fighter()
print()
scorpion.welcome_you_rival()
print('\n03 THIRD\n')
subzero = SubZero()
subzero.describe_fighter()
print()
subzero.welcome_you_rival()
print('\n04 FOURTH\n')
reptile = Reptile()
reptile.describe_fighter()
print()
reptile.welcome_you_rival()
reptile.scorpion_attack()
reptile.subzero_attack()
