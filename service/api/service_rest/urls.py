from django.urls import path
from .views import api_list_appointments, api_detail_appointment, api_list_technicians, api_service_history, api_automobile_list

urlpatterns = [
  path("technicians/", api_list_technicians, name="api_create_technicians"),
  path("automobiles/", api_automobile_list, name= "api_automobile_list"),

  path("service/", api_list_appointments, name="api_create_appointments"),
  path("service/<int:pk>/", api_detail_appointment, name="api_delete_appointment"),
  path("service/history/<str:pk>/", api_service_history, name="api_service_history"),
]
