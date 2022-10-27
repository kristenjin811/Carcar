# CarCar

Team:

* Rachel Johnson - Sales microservice
* Wenqi Jin - Service microservice

## Design

CarCar is an app comprised of three microservices: Inventory, Sales and Services. The aggregate root of CarCar is Inventory as the bounded contexts of Sales and Services is based on data in the Inventory microservice. 

The microservices communicate via a poller. The sales microservice polls for value objects based on the automobile model in Inventory. 

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

The Sales microservice is an API that exists within a bounded context tied to the Inventory API. The purpose of the application is to allow tracking of sale transaction data. This is achieved through a number of components: 
* Potential customer tracking
* Sales representative tracking
* Transaction history 
    * Total transactions
    * By sales representative
* Ability to create new transactions

### Models
The sales microservice uses four models:
* AutomobileVO - a value object representing an individual vehicle
* SalesPerson
* Customer
* SalesRecord
 
 ### Poller

 

