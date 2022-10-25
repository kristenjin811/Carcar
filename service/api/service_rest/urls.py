from django.urls import path
from .views import api_list_service_appointments

urlpatterns = [
  path("service_appointments/", api_list_service_appointments, name="api_create_service_appointments"),
]
