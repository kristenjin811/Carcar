
import React from 'react'
import App from '../App'


class AppointmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      VIN: "",
      customer_name: "",
      time: "",
      technicians: [],
      reason: "",
    }
    this.handleVINChange = this.handleVINChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleReasonChange = this.handleReasonChange.bind(this)
    this.handleTechnicianChange = this.handleTechnicianChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleVINChange(event) {
    const value = event.target.value
    this.setState({VIN: value})
  }
  handleNameChange(event) {
    const value = event.target.value
    this.setState({customer_name: value})
  }
  handleTimeChange(event) {
    const value = event.target.value
    this.setState({time: value})
  }
  handleReasonChange(event) {
    const value = event.target.value
    this.setState({reason: value})
  }
  handleTechnicianChange(event) {
    const value = event.target.value
    this.setState({technician: value})
  }
  async handleSubmit(event) {
    event.preventDefault()
    const data = {...this.state}
    delete data.technicians
    console.log(data)

    const appointmentsUrl = 'http://localhost:8080/api/service/'
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(appointmentsUrl, fetchConfig)
    if (response.ok) {
      const newAppointment = await response.json()
      console.log("new appointment:::::", newAppointment)

      const cleared = {
        VIN: "",
        customer_name: "",
        time: "",
        technician: "",
        reason: "",
      }
      this.setState(cleared)

      alert('A form was submitted: ' + this.state.customer_name + ' // ' + this.state.time+ ' // ' + this.state.reason)

    } else {
      console.error("bad request")
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/technicians/'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      this.setState({technicians: data.technicians})
    }

  }

  render () {
    return (
      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="mt-3">Create an appointment</h1>
          <form onSubmit={this.handleSubmit} id="create-appointment-form">
             <div className="form-floating mb-3">
              <input onChange={this.handleVINChange} value={this.state.VIN} placeholder="VIN" required type="text" minLength={17} maxLength={17} name="VIN" id="VIN" className="form-control"/>
              <label htmlFor="VIN">VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleNameChange} value={this.state.customer_name} placeholder="Customer name" required type="text" name="customer_name" id="customer_name" className="form-control"/>
              <label htmlFor="customer_name">Customer name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleTimeChange} value={this.state.time} placeholder="Schedule time" required type="datetime-local" name="time" id="time" className="form-control"/>
              <label htmlFor="time">Time</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleReasonChange} value={this.state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control"/>
              <label htmlFor="reason">Reason</label>
            </div>
            <div className="mb-3">
              <select onChange={this.handleTechnicianChange} required id="technician" name="technician" className="form-select">
                <option value="">Choose your technician</option>
                  {this.state.technicians.map(technician => {
                    return (
                      <option value={technician.id} key={technician.id}>
                        {technician.name}
                      </option>
                    )
                  })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}


export default AppointmentForm
