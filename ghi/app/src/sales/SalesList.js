import React from 'react';

function SalesList(props) {
    return (
        <>
            <h2>All Sales</h2>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Employee Number</th>
                            <th>Purchaser</th>
                            <th>Vehicle VIN</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.sales_records && props.sales_records.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.sales_person.employee_id}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.vin}</td>
                                    <td>{sale.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default SalesList