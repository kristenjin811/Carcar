from django.urls import path
from .views import api_list_appointments, api_detail_appointment

urlpatterns = [
  path("service/", api_list_appointments, name="api_create_appointments"),
  path("service/<int:pk>/", api_detail_appointment, name="api_delete_appointment"),
]
