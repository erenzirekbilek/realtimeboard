from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from django.urls import include

def home(request):
    return render(request, 'index.html')

urlpatterns = [
    path('', home),   # 👈 BU SATIR OLMAZSA ROKET GİTMEZ
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),

]
