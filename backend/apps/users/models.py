from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.utils.crypto import get_random_string

class User(AbstractUser):
    is_premium = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # Çakışmayı önlemek için
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',  # Çakışmayı önlemek için
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

class UserActivation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=64, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def generate_token(self):
        self.token = get_random_string(64)
        self.save()
