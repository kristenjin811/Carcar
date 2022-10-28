import React from "react"

class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobiles: [],
            automobile: '',
            sales_persons: [],
            sales_person: '',
            customers: [],
            customer: '',
            price: "",
            submitted: false
        }

        this.handleAutomobileChange = this.handleAutomobileChange.bind(this)
        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handleSalesPriceChange = this.handleSalesPriceChange.bind(this)
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = { ...this.state }
        delete data.automobiles
        delete data.sales_persons
        delete data.customers
        delete data.submitted

        const createSalesRecord = 'http://localhost:8090/api/salesrecords/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(createSalesRecord, fetchConfig)

        if (response.ok) {
            const newSalesRecord = await response.json()
            console.log(newSalesRecord)
            let soldAutoIndex = this.state.automobiles.findIndex(auto => data.automobile === auto.vin)

            let automobiles = [...this.state.automobiles]

            automobiles[soldAutoIndex].has_sold = true
            this.setState({ automobiles })
        }


        const cleared = {
            automobile: "",
            sales_person: "",
            customer: "",
            price: "",
            submitted: true
        }
        this.setState(cleared)
    }


    handleAutomobileChange(event) {
        const value = event.target.value
        this.setState({ automobile: value })
    }

    handleSalesPersonChange(event) {
        const value = event.target.value
        this.setState({ sales_person: value })
    }

    handleCustomerChange(event) {
        const value = event.target.value
        this.setState({ customer: value })
    }

    handleSalesPriceChange(event) {
        const value = event.target.value
        this.setState({ price: value })
    }


    async componentDidMount() {
        const automobileURL = "http://localhost:8090/api/automobileVO/"
        const autoResponse = await fetch(automobileURL)
        if (autoResponse.ok) {
            const autoData = await autoResponse.json()
            this.setState({ automobiles: autoData.autos })
        }

        const salespeopleURL = 'http://localhost:8090/api/salespersons/'
        const salesRepResponse = await fetch(salespeopleURL)
        if (salesRepResponse.ok) {
            const salesRepData = await salesRepResponse.json()
            this.setState({ sales_persons: salesRepData.sales_persons })

        }
        const customerURL = 'http://localhost:8090/api/customers/'
        const customerResponse = await fetch(customerURL)
        if (customerResponse.ok) {
            const customerData = await customerResponse.json()
            this.setState({ customers: customerData.customers })
        }
    }



    render() {

        let successMessageClass = 'alert alert-success d-none mb-0'
        if (this.state.submitted) {
            successMessageClass = 'alert alert-success mb-0'
        }

        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4 bdr">
                            <h1>Create sales record</h1>
                            <form onSubmit={this.handleSubmit} id="create-salesrecord-form">
                                <div className="mb-3">
                                    <select onChange={this.handleAutomobileChange} value={this.state.automobile} required name="automobiles" id="automobiles" className="form-select">
                                        <option value="">Choose an automobile by #VIN</option>
                                        {this.state.automobiles
                                            .filter(auto => !auto.has_sold)
                                            .map(automobile => {
                                                return (
                                                    <option key={automobile.vin} value={automobile.vin}>
                                                        {automobile.vin}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleSalesPersonChange} value={this.state.sales_person}
                                        required name="sales_persons" id="sales_persons" className="form-select">
                                        <option value="">Assign a sales person</option>
                                        {this.state.sales_persons.map(sales_person => {
                                            return (
                                                <option key={sales_person.employee_id} value={sales_person.employee_id}>
                                                    {sales_person.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleCustomerChange} value={this.state.customer} required name="customers" id="customers" className="form-select">
                                        <option value="">Choose a customer</option>
                                        {this.state.customers.map(customer => {
                                            return (
                                                <option key={customer.id} value={customer.name}>
                                                    {customer.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleSalesPriceChange} value={this.state.price} placeholder="Sales Price" required type="text" name="prices" id="prices" className="form-control" />
                                    <label htmlFor="price">Sales Price</label>
                                </div>
                                <button className="btn btn-outline-dark">Create</button>
                            </form>
                        </div>
                        <br></br>
                        <div className={successMessageClass} id="success-message">
                            <p>Transaction added successfully!</p>
                        </div>
                    </div>
                </div >
            </>
        )
    }

}
export default SalesRecordForm