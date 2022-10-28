import React from 'react'

function AutomobileList(props) {

    return (
        <>
            <h1 className="mt-3">Vehicles in Inventory</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {props.automobiles?.map(automobiles => {
                        return (
                            <tr key={automobiles.id}>
                                <td> {automobiles.vin} </td>
                                <td> {automobiles.color} </td>
                                <td> {automobiles.year} </td>
                                <td> {automobiles.model.name} </td>
                                <td> {automobiles.model.manufacturer.name} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AutomobileList