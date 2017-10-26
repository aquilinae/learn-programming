class Human():
    def __init__(self):
        self.type = 'humanoid'
        self.planet = 'terra'
        self.behavior = 'friendly'
    def whois(self):
        print(self.type.title(), "from", self.planet.title(), "is", self.behavior)

class Automata(Human):
    def __init__(self):
        super().__init__()
        self.type = 'cyborg'

class Marsian(Human):
    def __init__(self):
        super().__init__()
        self.planet = 'mars'

class MarsAutomata(Automata, Marsian):
    def __init__(self):
        super().__init__()
        self.behavior = 'enemy'

engineer = Human()
engineer.whois()
print()
mark_one = Automata()
mark_one.whois()
print()
marsian = Marsian()
marsian.whois()
print()
marsian_cyborg = MarsAutomata()
marsian_cyborg.whois()
