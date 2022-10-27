import React from 'react'

function ManufacturerList(props) {
    console.log(":::", props)

    return (
      <>
      <h1 className="mt-3">Manufacturers</h1>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
          {props.manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td> { manufacturer.name } </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </>
    )
  }

export default ManufacturerList
