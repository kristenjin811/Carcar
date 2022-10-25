from .models import ServiceAppointment, Technician
from common.json import ModelEncoder
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse

# Create your views here.


class TechnicianListEncoder(ModelEncoder):
  model = Technician
  properties = ["name"]


class AppointmentListEncoder(ModelEncoder):
  model = ServiceAppointment
  properties = ["VIN", "customer_name", "time", "technician", "reason"]
  encoders = {
    "technician": TechnicianListEncoder(),
  }


class AppointmentDetailEncoder(ModelEncoder):
  model = ServiceAppointment
  properties = ["id", "VIN", "customer_name", "time", "technician", "reason"]
  encoders = {
    "technician": TechnicianListEncoder(),
  }


require_http_methods(["GET", "POST"])
def api_list_appointments(request):
  if request.method == "GET":
    service_appointments = ServiceAppointment.objects.all()
    return JsonResponse(
      {"service_appointments": service_appointments},
      encoder = AppointmentListEncoder,
    )
  else:
    content = json.loads(request.body)

    try:
      technician = Technician.objects.get(id=content["technician"])
      content["technician"] = technician
    except Technician.DoesNotExist:
      return JsonResponse(
        {"message": "Invalid technician id"},
        status = 400,
      )
    service_appointment = ServiceAppointment.objects.create(**content)
    return JsonResponse(
      service_appointment,
      encoder=AppointmentDetailEncoder,
      safe=False,
    )


require_http_methods(["GET", "DELETE", "PUT"])
def api_detail_appointment(request, pk):
  if request.method == "DELETE":
    count, _ = ServiceAppointment.objects.filter(id=pk).delete()
    return JsonResponse({"delete": count > 0})
  elif request.method == "GET":
    service_appointment = ServiceAppointment.objects.get(id=pk)
    return JsonResponse(
      service_appointment,
      encoder=AppointmentDetailEncoder,
      safe=False,
    )
