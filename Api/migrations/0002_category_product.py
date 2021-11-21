# Generated by Django 3.2.9 on 2021-11-20 09:49

import autoslug.fields
import ckeditor.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=250)),
                ('Slug', autoslug.fields.AutoSlugField(editable=False, populate_from='Title', unique=True)),
                ('Description', ckeditor.fields.RichTextField(blank=True, null=True)),
                ('Img', models.ImageField(upload_to='pics')),
                ('Img2', models.ImageField(blank=True, null=True, upload_to='pics')),
                ('Img3', models.ImageField(blank=True, null=True, upload_to='pics')),
                ('Img4', models.ImageField(blank=True, null=True, upload_to='pics')),
                ('createdAt', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]