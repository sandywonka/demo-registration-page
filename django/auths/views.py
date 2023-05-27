from rest_framework import generics
from .models import Registration
from .serializers import RegistrationSerializer

class RegistrationView(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
