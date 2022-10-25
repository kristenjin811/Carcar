import React from 'react'


function AppointmentList(props){
  return (
    <>
    <h1>Service appointments</h1>
    <table className="table table-hover">
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
        {props.service_appointments.map((appointment, i) => {
          const date = new Date(appointment.time)
          console.log(":::", date)
          return (
            <tr key={i}>
              <td> { appointment.VIN } </td>
              <td> { appointment.customer_name } </td>
              <td> { date.toLocaleDateString() } </td>
              <td> { date.toLocaleTimeString() } </td>
              <td> { appointment.technician.name } </td>
              <td> { appointment.reason } </td>
              <td>
                {/* <button type="button" class="btn btn-danger">Cancel</button>
                <button type="button" class="btn btn-primary">Finished</button> */}
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <button type="button" className="btn btn-danger">Cancel</button>
                  <button type="button" className="btn btn-primary">Finished</button>
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

export default AppointmentList
