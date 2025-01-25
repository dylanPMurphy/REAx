
from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.serializers import ModelSerializer



class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('-date_modified')
    serializer_class = ItemSerializer


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save()