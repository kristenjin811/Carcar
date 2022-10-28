# CarCar 🚗

Team 👩‍💻

* Rachel Johnson - Sales microservice
* Wenqi Jin - Service microservice

## Features
CarCar provides the following features:
- Show list of appointments
- Create new appointment
- Show past services for a vehicle
- Show list of technicians
- Add new technician
- Show list of manufacturers
- Add new manufacturer
- Show list of car models
- Add new car model
- Show list of automobiles
- Add new automobiles
- Add new customers
- Add new sales representatives
- Add sale transaction records
- View all sale transactions
- View sale transactions by sale representative

CarCar is an app comprised of three microservices: Inventory, Sales and Services. The aggregate root of CarCar is Inventory as the bounded contexts of Sales and Services is based on data in the Inventory microservice. 

The microservices communicate via a poller. The sales microservice polls for value objects based on the automobile model in Inventory. 

The inventory API runs on port 8100. 
URLS to access the inventory API:
- http://localhost:8100/api/manufacturers/
- http://localhost:8100/api/models/
- http://localhost:8100/api/automobiles/

## Getting Started
You can get started with Carcar by setting up a local development environment.

## Development Environment(Local)
### System Requirements
- Docker
- Git

### Initializing all the services
To initialize all the services on a local development environment, including running a docker image for the DB and seeding the DB with the codes below.
```
docker volume create beta-data
docker-compose build
docker-compose up
```

## Design
"Sales", "Services", and "Inventory" are each in their own separate microservices. 

```insert diagram here```

# API Endpoints
## Service microservice

The service microservice has three models:
- AutomobileVO:
This is a value object which polls VIN from the Automobile model in the Inventory microservice. It is used to evaluate if a specific vehicle get VIP treatment at CarCar.

- Technician:
This is a simple model that contains the name and employee number of a techinician. An Employee number is unique to each technician. User can create a new technician on the webpage with just a name.

- ServiceAppoinment:
This is a model contains VIN, customer name, scheduled time, reason for visit, and technician(a foreign key) for an appointment. This model also indicates whether an appointment is finished, and whether the vehicle gets VIP treatment with two boolean properties named 'finsihed' and 'VIP_treatment".


The service poller:
- a poller to use to integrate with Inventory, specifically the Automobile modle

## Sales microservice

The Sales microservice is an API that exists within a bounded context tied to the Inventory API. The purpose of the application is to allow tracking of sale transaction data. This is achieved through a number of components: 
* Potential customer tracking
* Sales representative tracking
* Transaction history 
    * Total transactions
    * By sales representative
* Ability to create new sale transaction records
    * When a new sale record is created the associated Automobile is marked as sold and no longer appears in the select dropdown of the create sale record form.

### Models
The sales microservice uses four models:
* AutomobileVO - a value object representing an individual vehicle. This data is obtained via a poller from the inventory microservice. 
    * A unique VIN number.
    * A boolean field indicating if the automobile has been sold.
* SalesPerson - an entity.
    * Name of the sales person. 
    * A unique employee ID.
* Customer - an entity.
    * Name of customer.
    * Address.
    * Phone number. 
* SalesRecord - a value object. 
    * Automobile - a Foreign Key representing an instance of the AutomobileVO'.
    * Sales person - a Foreign Key representing the SalesPerson
    * Customer - a Foreign Key representing the Customer. 
    * Price
 
 ### Poller

 
