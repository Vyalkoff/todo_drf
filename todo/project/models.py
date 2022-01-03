from django.db import models
from users.models import Users


# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=50)
    url_address = models.URLField(max_length=200)
    user = models.ManyToManyField(Users)

    def __str__(self):
        return self.name


class Todo(models.Model):
    project = models.ForeignKey(Project, models.PROTECT)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, models.PROTECT)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user
