from django.db import models

# Create your models here.
class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField(max_length=2047)
    date_added = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title
