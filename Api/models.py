from django.db import models
from autoslug import AutoSlugField
from ckeditor.fields import RichTextField

class Category(models.Model):
    name = models.CharField(max_length=250)
    createdAt = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    Title = models.CharField(max_length=250)
    Slug = AutoSlugField(populate_from='Title', unique=True)

    Category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)

    Description = RichTextField(blank=True, null=True)

    Img = models.ImageField(upload_to='pics')
    Img2 = models.ImageField(upload_to='pics', blank=True, null=True)
    Img3 = models.ImageField(upload_to='pics', blank=True, null=True)
    Img4 = models.ImageField(upload_to='pics', blank=True, null=True)

    createdAt = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.Title

class Contact(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100)
    message = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.name

class Banner(models.Model):
    Text = models.CharField(max_length=1024)
    createdAt = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.Text