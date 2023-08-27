from django.db import models


class Character(models.Model):
    name = models.CharField(max_length=40)
    display = models.IntegerField(default=0)

class LogReport(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE)
    level = models.IntegerField(default=1)
    exp = models.IntegerField(default=0)
    is_successfully_validated = models.BooleanField(default=False)
    url_submitted = models.URLField(blank=True, null=True)
    ts_report_completed = models.DateTimeField(blank=True, null=True)
