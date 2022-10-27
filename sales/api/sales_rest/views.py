from unicodedata import name
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse

from common.json import ModelEncoder
from .models import AutomobileVO, SaleRecord, SalesPerson, Customer

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_id"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "phone_number", "address"]


class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = ["sales_person", "customer", "price"]

    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        # "automobile": AutomobileVOEncoder,
    }

    def get_extra_data(self, o):
        return {
            "vin": o.automobile.vin,
        }


@require_http_methods(["GET", "POST"])
def automobile_vo_list(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse(
            {"autos": autos},
            encoder=AutomobileVOEncoder,
        )


@require_http_methods(["GET", "POST"])
def sales_person_list(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=SalesPersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(sales_person, encoder=SalesPersonEncoder, safe=False)
        except:
            response = JsonResponse({"message": "Sales Person can't be created"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def sales_person_detail(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            return JsonResponse(sales_person, encoder=SalesPersonEncoder, safe=False)
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        if request.method == "DELETE":
            count, _ = SalesPerson.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(customer, encoder=CustomerEncoder, safe=False)
        except:
            response = JsonResponse({"message": "Customer cannot be created."})
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def sales_record_list(request):
    if request.method == "GET":
        sales_records = SaleRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SaleRecordEncoder,
            safe=False,
        )
    else:
        # try:
        content = json.loads(request.body)
        content = {
            **content,
            "sales_person": SalesPerson.objects.get(
                employee_id=content["sales_person"]
            ),
            "automobile": AutomobileVO.objects.get(vin=content["automobile"]),
            "customer": Customer.objects.get(name=content["customer"]),
        }
        print(content)
        sales_record = SaleRecord.objects.create(**content)
        return JsonResponse(
            {"sales_record": sales_record},
            encoder=SaleRecordEncoder,
            safe=False,
        )
        # except:
        #     response = JsonResponse({"message": "Sales Record cannot be created"})
        #     response.status_code = 400
        #     return response
