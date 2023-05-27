from django.db import models
from django.core.exceptions import ValidationError



def validate_mobile_number(value):
    if not value.startswith('+62'):
        raise ValidationError('Mobile number must start with "+62".')

class Registration(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]


    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=20, unique=True, validators=[validate_mobile_number])
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)