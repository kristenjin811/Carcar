from django.urls import path
from .views import (
    automobile_vo_list,
    customer_list,
    sales_person_list,
    sales_person_detail,
    sales_record_list,
)

urlpatterns = [
    path("salespersons/", sales_person_list, name="sales_person_list"),
    path("salespersons/<int:pk>/", sales_person_detail, name="sales_person_detail"),
    path("customers/", customer_list, name="customer_list"),
    path("sales-records/", sales_record_list, name="sales_record_list"),
    path("automobileVO/", automobile_vo_list, name="automobile_vo_list"),
]
