from django.core.mail import send_mail
from django.conf import settings

def send_activation_email(user_email: str, token: str):
    activation_link = f"http://localhost:3000/activate/{token}"  # Frontend activation route
    subject = "RealtimeBoard Email Activation"
    message = f"Merhaba!\nHesabınızı aktifleştirmek için şu linke tıklayın:\n{activation_link}"
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user_email], fail_silently=False)
