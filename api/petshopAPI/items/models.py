from django.db import models

# Create your models here.

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=40)
    img = models.CharField(max_length=100)
    price = models.IntegerField()
    company = models.CharField(max_length=40, null=True)
    info = models.TextField(max_length=500, null=True)
    inCart = models.BooleanField(default=False)
    count = models.IntegerField(default=0)
    total = models.IntegerField(default=0)
    category = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.title
