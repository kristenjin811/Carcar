import React from 'react'


class AppointmentList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      service_appointments: []
    }
  }

  async componentDidMount() {
    const url = "http://localhost:8080/api/service/"
    const response = await fetch(url)
    if(response.ok) {
      const data = await response.json()
      console.log(data)
      let appointments = data.service_appointments.filter(appointment => {
        return (
          appointment.finished === false
          )
        })
        this.setState({service_appointments: appointments})
      } else {
        console.error("invalid request")
      }
    }

  async handleClick(id, method) {
    const url = `http://localhost:8080/api/service/${id}/`
    var fetchConfig
    if (method === "DELETE") {
      fetchConfig = {
        method: "DELETE",
      }
    } else {
      fetchConfig = {
        method: "PUT",
      }
    }
    const response = await fetch(url, fetchConfig)
    if (response.ok) {
      window.location.reload(false)
    } else {
      console.error(response.status)
    }
  }

    render() {
      return (
      <>
      <h1>Service appointments</h1>
      <table className="table table-striped table-hover">
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
        </tbody>
      </table>
      </>
      )
  }
}

export default AppointmentList
