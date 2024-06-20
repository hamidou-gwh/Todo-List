# Generated by Django 5.0.6 on 2024-06-17 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('created_date', models.DateField(auto_now_add=True)),
                ('due_date', models.DateField()),
                ('status', models.CharField(choices=[('NewTask', 'New'), ('InProgress', 'In Progress'), ('DoneTask', 'Done')], default='NewTask', max_length=20)),
            ],
        ),
    ]