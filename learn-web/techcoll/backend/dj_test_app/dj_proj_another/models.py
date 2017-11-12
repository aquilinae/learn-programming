from django.db import models

# Create your models here.
class Article(models.Model):
    text = models.TextField()
    header = models.CharField(max_length=150)
    date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.header

class Comment(models.Model):
    author = models.CharField(max_length=100)
    text = models.CharField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey(Article)

    def __str__(self):
        return self.text[:20]
