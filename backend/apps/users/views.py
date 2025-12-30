# users/views.py
from rest_framework import generics, permissions
from .models import User
from .serializers import UserSerializer, UserRegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Kullanıcı kayıt
class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserRegisterSerializer

# Kullanıcı listeleme / detay (admin için)
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = UserSerializer
