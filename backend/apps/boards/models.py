from django.db import models


class Board(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Card(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="cards")
    title = models.CharField(
        max_length=255,
        default="Untitled Card"
    )
    description = models.TextField(blank=True)
    x = models.IntegerField(default=0)
    y = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
