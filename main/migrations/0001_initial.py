# Generated by Django 4.2.4 on 2023-08-27 04:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('display', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='LogReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.IntegerField(default=1)),
                ('exp', models.IntegerField(default=0)),
                ('is_successfully_validated', models.BooleanField(default=False)),
                ('url_submitted', models.URLField(blank=True, null=True)),
                ('ts_report_completed', models.DateTimeField(blank=True, null=True)),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.character')),
            ],
        ),
    ]
