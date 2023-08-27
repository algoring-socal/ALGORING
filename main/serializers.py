from rest_framework import serializers

from main.models import LogReport, Character


class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = '__all__'

class LogReportSerializer(serializers.ModelSerializer):
    character = CharacterSerializer()

    class Meta:
        model = LogReport
        fields = '__all__'
