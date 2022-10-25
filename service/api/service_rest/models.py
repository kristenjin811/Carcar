from django.db import models



# Create your models here.
class AutomobileVO(models.Model):
  vin = models.CharField(max_length=17, unique=True)
  import_href = models.CharField(max_length=150, null=True)

  def __str__(self):
    return self.vin


class Technician(models.Model):
  name = models.CharField(max_length=200)
  employee_number = models.IntegerField(unique=True)

  def __str__(self):
    return self.name


class ServiceAppointment(models.Model):
  VIN = models.CharField(max_length=120)
  customer_name = models.CharField(max_length=120)
  time = models.DateTimeField()
  technician = models.ForeignKey(
    Technician,
    related_name = "service_appointments",
    on_delete = models.PROTECT
  )
  reason = models.CharField(max_length=500)
  VIP_treatment = models.BooleanField(default=False)
  finished = models.BooleanField(default=False)


  def __str__(self):
    return self.customer_name + ", " + self.reason
