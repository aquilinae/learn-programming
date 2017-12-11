# Таск 4
'''
Создать класс любого объекта в комнате
'''

class Keyboard:

    def __init__(self, manufacturer, model, formfactor, wire_type, key_type, ):
        self.manufacturer = manufacturer
        self.model = model
        self.formfactor = formfactor
        self.wire_type = wire_type
        self.key_type = key_type

    def describe(self):
        print("Keyboard {} {}".format(self.manufacturer.title(), self.model.upper()), "have options:\nFormfactor: {}\nWire: {}\nKeys type: {}".format(self.formfactor.title(), self.wire_type.title(), self.key_type.title()))

genius_keyboard = Keyboard('genius', 'gmt-100', '100%', 'wire', 'membran')
genius_keyboard.describe()
