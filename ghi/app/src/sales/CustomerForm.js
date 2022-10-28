import React from "react"

class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phone_number: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = { ...this.state }
        console.log(data)

        const customerURL = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(customerURL, fetchConfig)
        console.log('response:', response)
        if (response.ok) {
            const newCustomer = await response.json()
            console.log(newCustomer)
        }

        const cleared = {
            name: '',
            address: '',
            phone_number: '',
        }
        this.setState(cleared)
    }
    handleNameChange(event) {
        const value = event.target.value
        this.setState({ name: value })
    }

    handleAddressChange(event) {
        const value = event.target.value
        this.setState({ address: value })
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value
        this.setState({ phone_number: value })
    }



    render() {

        // let successMessageClass = 'alert alert-success d-none mb-0'
        // if (this.state.submitted) {
        //     successMessageClass = 'alert alert-success mb-0'
        // }

        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4 bdr">
                            <h1>Add Customer</h1>
                            <form onSubmit={this.handleSubmit} id="create-customer-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleAddressChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                                    <label htmlFor="address">Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handlePhoneNumberChange} value={this.state.phone_number} placeholder="Phone Number" required type="text" name="phoneNumber" id="phoneNumber" className="form-control" />
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                </div>
                                <button className="btn btn-outline-dark">Create</button>
                            </form>
                        </div>
                        {/* <br></br>
                        <div className={successMessageClass} id="success-message">
                            <p>Customer Added!</p>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}
export default CustomerForm
