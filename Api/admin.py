from django.contrib import admin
from .models import Contact, Category, Product, Banner

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'createdAt']
    ordering = ['-createdAt']
    search_fields = ('name', 'createdAt')

class ProductAdmin(admin.ModelAdmin):
    list_display = ['Title', 'Category', 'createdAt']
    ordering = ['-createdAt']
    search_fields = ('Title', 'Category', 'Description', 'createdAt')

class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'email', 'message', 'createdAt']
    ordering = ['-createdAt']
    search_fields = ('name', 'company', 'email', 'message', 'createdAt')
    readonly_fields = ['name', 'company', 'email', 'message', 'createdAt']

class BannerAdmin(admin.ModelAdmin):
    list_display = ['Text', 'createdAt']
    ordering = ['-createdAt']
    search_fields = ('Text', 'createdAt')

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Banner, BannerAdmin)