import React, { useState, useEffect } from 'react'

class SalesListByRep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales_person: '',
            sales_persons: [],
            sales_records: [],

        }
        this.handleSalesRepChange = this.handleSalesRepChange.bind(this)
    }
    async componentDidMount() {
        const salePersonsURL = 'http://localhost:8090/api/salespersons/'
        const salePersonsResponse = await fetch(salePersonsURL)
        if (salePersonsResponse.ok) {
            const salePersonsData = await salePersonsResponse.json()
            this.setState({ sales_persons: salePersonsData.sales_persons })
        }
        const saleRecordURL = 'http://localhost:8090/api/salesrecords/'
        const saleRecordResponse = await fetch(saleRecordURL)
        if (saleRecordResponse.ok) {
            const saleRecordData = await saleRecordResponse.json()
            this.setState({ sales_records: saleRecordData.sales_records })
        }
    }
    async handleSalesRepChange(event) {
        const value = event.target.value
        this.setState({ sales_person: value })

        // const saleURL = 'http://localhost:8090/api/salesrecords/'
        // const saleResponse = await fetch(saleURL)
        // console.log('response:', saleResponse)


        // if (saleResponse.ok) {
        //     const saleData = await saleResponse.json()
        //     console.log('sale records:', saleData)

        //     if (this.state.sales_person === '') {
        //         this.setState({ sales_records: saleData.sales_records })
        //         console.log('the sales:', saleData.sales_records)
        //     } else {
        //         let filteredSaleList = []
        //         for (let sale of saleData.sales_records) {
        //             if (String(sale.sales_person.employee_id) === this.state.sales_person) {
        //                 filteredSaleList.push(sale)
        //             }
        //         }
        //         this.setState({ saleData: filteredSaleList })
        //     }
        // }
    }


    render() {
        return (
            <>
                <h2>Representative's Sales</h2>
                <div>
                    <select className="form-select"
                        onChange={this.handleSalesRepChange} value={this.state.sales_person}
                        required name='sales_person' id='sales_person'
                    >
                        <option value=''>Choose a sales rep</option>
                        {this.state.sales_persons.map(sales_person => {
                            return (
                                <option key={sales_person.employee_id} value={sales_person.employee_id}>{sales_person.name}</option>
                            )
                        }
                        )}
                    </select>
                </div>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Sales Representative</th>
                                <th>Purchaser</th>
                                <th>Vehicle VIN</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales_records
                                ?.filter(sale =>
                                    sale.sales_person.employee_id == this.state.sales_person
                                    || this.state.sales_person === '')
                                .map(sale => (
                                    <tr key={sale.id}>
                                        <td>{sale.sales_person.name}</td>
                                        <td>{sale.customer.name}</td>
                                        <td>{sale.vin}</td>
                                        <td>{sale.price}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default SalesListByRep