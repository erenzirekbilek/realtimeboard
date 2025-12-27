from django.urls import path
from .views import BoardListCreateAPIView, api_root

urlpatterns = [
    path('', api_root),                 # /api/
    path('boards/', BoardListCreateAPIView.as_view()),  # /api/boards/
]
