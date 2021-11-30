from rest_framework.generics import RetrieveAPIView, UpdateAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import GenericViewSet

from .models import Users
from .serializers import UsersModelSerializer


class UsersModelViewSet(UpdateAPIView,ListModelMixin,RetrieveAPIView,GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]