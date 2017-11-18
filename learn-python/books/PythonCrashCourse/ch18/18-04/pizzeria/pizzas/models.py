from django.db import models

# Create your models here.
class Pizza(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Topping(models.Model):
    pizza = models.ForeignKey(Pizza)
    name = models.CharField(max_length=127)

    def __str__(self):
        return self.name
