import random

def hp_count(race_name):
    if race_name == 'human':
        return 200
    elif race_name == 'orc':
        return 400
    elif race_name == 'elf':
        return 150
    elif race_name == 'undead':
        return 175
    else:
        return 200

def hit_power_count(class_name):
    if class_name == 'warrior':
        return 30
    elif class_name == 'mage':
        return 35
    elif class_name == 'rogue':
        return 25
    else:
        return 30

class Race():

    def __init__(self, race_name):
        self.race_name = race_name
        self.hp = hp_count(self.race_name)

class PlayerClass():

    def __init__(self, class_name):
        self.class_name = class_name
        self.hit_power = hit_power_count(self.class_name)

class Fighter():

    def __init__(self, race, fclass):
        self.race = Race(race)
        self.fclass = PlayerClass(fclass)

orc = Fighter("orc", "warrior")
elf = Fighter("elf", "rogue")

print(orc)
print(orc.race)
print(orc.fclass)
print(orc.race.hp)
print(orc.fclass.hit_power)

hp_first_fighter = orc.race.hp
hp_second_fighter = elf.race.hp

def isAlive(hp_first_fighter, hp_second_fighter):
    if hp_first_fighter > 0 and hp_second_fighter > 0:
        return True
    else:
        return False

while isAlive(hp_first_fighter, hp_second_fighter):
    print("\nThe {} is attacking!".format(orc.race.race_name))
    damage = orc.fclass.hit_power * random.random()
    hp_second_fighter -= round(damage,2)
    print("{} gets {} damage and now have {}".format(elf.race.race_name, round(damage,2), round(hp_second_fighter,2)))
    print("\nThe {} is attacking!".format(elf.race.race_name))
    damage = elf.fclass.hit_power * random.random()
    hp_first_fighter -= round(damage,2)
    print("{} gets {} damage and now have {}".format(orc.race.race_name, round(damage,2), round(hp_first_fighter,2)))
