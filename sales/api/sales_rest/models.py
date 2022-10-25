from email.policy import default
from django.db import models
from django.urls import reverse

# Create your models here.


class ManufacturerVO(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_manufacturer", kwargs={"pk": self.id})

    def __str__(self):
        return self.name


class VehicleModelVO(models.Model):
    name = models.CharField(max_length=100)
    picture_url = models.URLField()

    manufacturer = models.ForeignKey(
        ManufacturerVO,
        related_name="models",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})

    def __str__(self):
        return self.name


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    model = models.ForeignKey(
        VehicleModelVO,
        related_name="automobiles",
        on_delete=models.CASCADE,
    )

    available = models.BooleanField(default=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})

    def __str__(self):
        return f"{self.color} {self.model} VIN:{self.vin}"


class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_id = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.PositiveIntegerField()
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class SaleRecord(models.Model):
    car = models.ForeignKey(
        AutomobileVO,
        related_name="car",
        null=False,
        blank=False,
        on_delete=models.PROTECT,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        null=False,
        blank=False,
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        null=False,
        blank=False,
        on_delete=models.PROTECT,
    )
    price = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.car} {self.sales_person} {self.price}"
