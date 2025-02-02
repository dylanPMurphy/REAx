
from rest_framework import viewsets
from .models import Item, User
from .serializers import ItemSerializer, UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework.serializers import ModelSerializer



class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('-date_modified')
    serializer_class = ItemSerializer



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save()