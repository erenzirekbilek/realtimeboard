from django.urls import path
from .views import UserRegisterView, ActivateUserView, LoginView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('activate/<str:token>/', ActivateUserView.as_view(), name='user-activate'),
    path('login/', LoginView.as_view(), name='user-login'),
]
