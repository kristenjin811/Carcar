from django.urls import path
from .views import api_list_appointments

urlpatterns = [
  path("service/", api_list_appointments, name="api_create_appointments"),
]
