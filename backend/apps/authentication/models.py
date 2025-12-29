from django.db import models
from django.contrib.auth.models import AbstractUser # Bu satırı ekledik

class User(AbstractUser):
    avatar_url = models.URLField(max_length=500, blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True)
    is_online = models.BooleanField(default=False)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.username