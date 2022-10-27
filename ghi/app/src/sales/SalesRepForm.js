import React from "react"

class SalesRepForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_id: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmployeeIDChange = this.handleEmployeeIDChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = { ...this.state }
        const salesRepURL = 'http://localhost:8090/api/salespersons/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(salesRepURL, fetchConfig)
        if (response.ok) {
            const newSalesPerson = await response.json()
            console.log(newSalesPerson)
        }

        const cleared = {
            name: '',
            employee_id: '',
        }
        this.setState(cleared)
    }

    handleNameChange(event) {
        const value = event.target.value
        this.setState({ name: value })
    }

    handleEmployeeIDChange(event) {
        const value = event.target.value
        this.setState({ employee_id: value })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Add sales representative</h1>
                            <form onSubmit={this.handleSubmit} id="salesrep_form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleEmployeeIDChange} value={this.state.employee_id} placeholder="Employee ID" required type="number" name="employee_id" id="employee_id" className="form-control" />
                                    <label htmlFor="employee_id">Employee Number</label>
                                </div>
                                <button className="btn btn-outline-dark">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SalesRepForm