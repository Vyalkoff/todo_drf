from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from .models import Users


class UsersModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'url')
