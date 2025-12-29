from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):

    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        USER = "USER", "User"
        FREELANCER = "FREELANCER", "Freelancer"

    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.USER
    )

    title = models.CharField(max_length=100, blank=True)
    bio = models.TextField(blank=True)

    is_verified = models.BooleanField(default=False)
    is_banned = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def is_admin(self):
        return self.role == self.Role.ADMIN

    def is_freelancer(self):
        return self.role == self.Role.FREELANCER

    def __str__(self):
        return f"{self.username} ({self.role})"