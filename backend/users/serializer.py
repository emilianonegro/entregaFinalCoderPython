from rest_framework import serializers
from .models import User

# User -> id, name, email, password
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')
        
