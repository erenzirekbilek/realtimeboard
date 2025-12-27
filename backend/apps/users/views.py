from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from .models import User, UserActivation
from .serializers import UserSerializer, UserRegistrationSerializer
from rest_framework.authtoken.views import ObtainAuthToken

# ---------- Registration ----------
class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        activation = UserActivation(user=user)
        activation.generate_token()
        activation.save()

        activation_link = f"http://127.0.0.1:3000/activate/{activation.token}"
        send_mail(
            'RealtimeBoard Email Activation',
            f'Click to activate your account: {activation_link}',
            settings.DEFAULT_FROM_EMAIL,
            [user.email],
            fail_silently=False
        )

# ---------- Activation ----------
class ActivateUserView(generics.GenericAPIView):
    def get(self, request, token):
        activation = get_object_or_404(UserActivation, token=token)
        user = activation.user
        user.is_active = True
        user.save()
        activation.delete()
        return Response({"message": "Account activated successfully"}, status=status.HTTP_200_OK)

# ---------- Login ----------
class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        user = self.user
        if not user.is_active:
            return Response({"error": "Account not activated."}, status=400)
        return response
