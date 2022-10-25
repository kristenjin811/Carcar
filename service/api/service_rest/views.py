from .models import ServiceAppointment, Technician
from common.json import ModelEncoder

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


require_http_methods(["GET", "POST"])
def api_list_appointments(request):
  if request.method == "GET":
    service_appointments = ServiceAppointment.objects.all()
    return JsonResponse(
      {"service_appointments": service_appointments},
      encoder = AppointmentListEncoder,
    )
