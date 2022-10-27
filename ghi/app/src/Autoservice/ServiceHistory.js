import React from 'react'


class ServiceHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vin: "",
      appointments: [],
    }
    // this.handleVinChange = this.handleVinChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleVINChange = this.handleVINChange.bind(this)
  }

  handleVINChange(event) {
    const value = event.target.value
    this.setState({vin: value})
  }
  async handleSubmit(event) {
    event.preventDefault()

    const serviceHistoryUrl = `http://localhost:8080/api/service/history/${this.state.vin}/`

    const request = await fetch(serviceHistoryUrl)
    console.log(request)
    if (request.ok) {
      const data = await request.json()
      console.log(data)
      this.setState({appointments: data})
    } else {
      console.log("service history does not exist")
    }
  }

  render () {
    return (
      <>
      <div>
        <form className="card card-sm" onSubmit={this.handleSubmit}>
          <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h4 text-body"></i>
            </div>

            <div className="col">
              <input onChange={this.handleVINChange} id={this.state.vin} value={this.state.vin} name={this.state.vin} className="form-control form-control-lg form-control-borderless" type="search" placeholder="VIN"/>
            </div>

            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">Search VIN</button>
            </div>
          </div>
        </form>
      </div>

      <h1 className="mt-3">Service history</h1>

      <table className="table table-striped table-hover" >
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {this.state.appointments.map(appointment => {
            const date = new Date(appointment.time)
            console.log(":::::::", appointment)
            return (
              <tr key={appointment.id}>
                <td> { appointment.VIN } </td>
                <td> { appointment.customer_name } </td>
                <td> { date.toLocaleDateString() } </td>
                <td> { date.toLocaleTimeString() } </td>
                <td> { appointment.technician.name } </td>
                <td> { appointment.reason } </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </>
    )
  }
}

export default ServiceHistory
