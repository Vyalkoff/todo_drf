from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Project, Todo


class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'url_address', 'user')


class TodoModelSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'project', 'text', 'user', 'is_active')
