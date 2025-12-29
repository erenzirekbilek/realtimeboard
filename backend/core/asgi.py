import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

# Şimdilik sadece http'yi tanımlıyoruz, birazdan websocket'i buraya ekleyeceğiz
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    # "websocket": AuthMiddlewareStack(URLRouter([])), # WebSocket rotaları buraya gelecek
})