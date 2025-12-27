from channels.generic.websocket import AsyncWebsocketConsumer
import json
from .models import GameRoom, Message
from django.contrib.auth import get_user_model

User = get_user_model()

class GameConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        self.room_group_name = f'game_{self.room_id}'

        # DB’de oda yoksa oluştur
        await self.create_room_if_not_exists(self.room_id)

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get('message', '')
        username = data.get('user', None)

        user = None
        if username:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                pass

        # DB’ye kaydet
        room = await self.get_room(self.room_id)
        await self.create_message(room, user, message)

        # Mesajı grup ile paylaş
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    async def chat_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({'message': message}))

    @database_sync_to_async
    def create_room_if_not_exists(self, room_id):
        GameRoom.objects.get_or_create(room_id=room_id)

    @database_sync_to_async
    def get_room(self, room_id):
        return GameRoom.objects.get(room_id=room_id)

    @database_sync_to_async
    def create_message(self, room, user, content):
        return Message.objects.create(room=room, user=user, content=content)
