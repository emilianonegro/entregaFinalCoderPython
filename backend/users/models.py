from django.db import models

# Create your models here
# Users -> id, name, email, password
class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=10)

    def __str__(self):
        return self.name
