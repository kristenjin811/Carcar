from django.contrib import admin

# Register your models here.
from .models import Technician, ServiceAppointment

admin.site.register(Technician)
admin.site.register(ServiceAppointment)

