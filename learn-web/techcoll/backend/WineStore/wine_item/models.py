from django.db import models

# Create your models here.
class WineItem(models.Model):
    id = models.AutoField(primary_key=True)
    inStock = models.BooleanField()
    price = models.FLoatField()
    picture = models.URLField()
    year = models.IntegerField()
    color = models.CharField()
    wine_type = models.CharField()
    city = models.CharField()
    name = models.CharField()
    company = models.CharField()
    about = models.CharField()
    #tags = models.Field()
