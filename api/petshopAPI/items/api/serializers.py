from rest_framework import serializers
from items.models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'title', 'img', 'price', 'company', 'info', 'inCart', 'count', 'total', 'category')
