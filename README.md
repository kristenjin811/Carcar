# CarCar 🚗

Team 👩‍💻

* Rachel Johnson - Sales microservice
* Wenqi Jin - Service microservice

## Features
CarCar provides the following features:
- List of appointments
- Create new appointment
- List of past services for a vehicle
- List of technicians
- List of manufacturers
- Add new manufacturer
-
-

## Getting Started
You can get started with Carcar by setting up a local development environment.

## Development Environment(Local)
### System Requirements
- Docker
- Git
- Insomnia

### Initializing all the services
To initialize all the services on a local development environment, including running a docker image for the DB and seeding the DB with the codes below.
```
docker volume create beta-data
docker-compose build
docker-compose up
```

## Design




## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
The sales microservice uses the RESTful API to handle automobile service appointments.

The service microservice uses three models:
- AutomobileVO - a value object representing an individual automobile
- Technician
- ServiceAppoinment


The service poller:
- a poller to use to integrate with Inventory, specifically the Automobile modle
