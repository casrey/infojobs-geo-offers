from django.db import models


class Offer(models.Model):
    title: models.CharField(blank=False)

    def __str__(self):
        return self.title
