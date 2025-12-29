from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = (
        "username",
        "email",
        "role",
        "is_verified",
        "is_banned",
        "is_staff",
        "is_superuser",
    )

    list_filter = ("role", "is_verified", "is_banned", "is_staff")
    search_fields = ("username", "email")

    fieldsets = BaseUserAdmin.fieldsets + (
        ("Extra Info", {
            "fields": (
                "role",
                "title",
                "bio",
                "is_verified",
                "is_banned",
            )
        }),
    )
