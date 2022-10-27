import React from 'react';
import {NavLink} from 'react-router-dom'


function VehicleList(props) {

  console.log(":::", props)
  return (
    <>
    <h1 className="mt-3">Vehicle models</h1>
    <table className="table table-striped table-hover">
      <thead>
      <tr>
        <th>Name</th>
        <th>Manufacturer</th>
        <th>Picture</th>
      </tr>
      </thead>
      <tbody>
				{props.vehicles.map(vehicle => {
          return (
            <tr key={vehicle.id}>
              <td> { vehicle.name } </td>
              <td> { vehicle.manufacturer.name } </td>
              <td>
                <img src={ vehicle.picture_url} alt="carImage" className="img-thumbnail"></img>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <button>
      <NavLink className="nav-link" to="/models/new">Create</NavLink>
    </button>
    </>
  )
}

export default VehicleList
