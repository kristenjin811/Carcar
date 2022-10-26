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
  }

  handleChange = (e) => {
    this.setState({input:e.target.value})
  }
  async handleSubmit(event) {
    event.preventDefault()

  }


  render () {
    return (
      <>
      <div>
        <form className="card card-sm">
          <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h4 text-body"></i>
            </div>

            <div className="col">
              <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="VIN"/>
            </div>

            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>

      <h1>Service history</h1>

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
        {/* <tbody>
          {this.state.service_appointments.map(appointment => {
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
                <td>
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <button type="button" onClick={() => this.handleClick(appointment.id, "DELETE")} className="btn btn-danger">
                      Cancel
                    </button>
                    <button type="button" onClick={() => this.handleClick(appointment.id, "PUT")} className="btn btn-success">
                      Finished
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody> */}
      </table>
      </>
    )
  }
}

export default ServiceHistory
