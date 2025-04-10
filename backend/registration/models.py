from django.db import models

# Create your models here.from django.db import models

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField()

    def __str__(self):
         return self.name



