from django.urls import path
from .views import UserRegisterView, UserListView, UserDetailView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Signup
    path('signup/', UserRegisterView.as_view(), name='signup'),

    # Login (JWT token)
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Admin için kullanıcı listesi ve detay
    path('list/', UserListView.as_view(), name='user_list'),
    path('detail/<int:pk>/', UserDetailView.as_view(), name='user_detail'),
]
