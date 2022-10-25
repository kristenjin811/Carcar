from django.urls import path
from .views import api_list_appointments, api_detail_appointment, api_list_technicians

urlpatterns = [
  path("technicians/", api_list_technicians, name="api_create_technicians"),
  
  path("service/", api_list_appointments, name="api_create_appointments"),
  path("service/<int:pk>/", api_detail_appointment, name="api_delete_appointment"),
]
