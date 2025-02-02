from django.db import models
from django.contrib.auth.models import User

class Item(models.Model):
    name = models.CharField(max_length=255)
    date_modified = models.DateTimeField(auto_now=True)
    note = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

class Item(models.Model):
    username = models.CharField(max_length=255)
    password = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.username
    
    