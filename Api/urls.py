from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='getRoutes'),
    path('category/', views.getCategorys, name='getCategorys'),
    path('products/', views.getProducts, name='getProducts'),
    path('products/<str:pk>/', views.getProduct, name='getProduct'),
    path('contact/', views.createContact, name='createContact'),
    path('banner/', views.getBanner, name='getBanner'),
]