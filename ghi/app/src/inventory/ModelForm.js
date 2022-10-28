import React from "react"

class ModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            picture_url: '',
            manufacturer_id: '',
            manufacturers: [],
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this)
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)

    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = { ...this.state }
        delete data.manufacturers
        const modelURL = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(data)
        const response = await fetch(modelURL, fetchConfig)
        if (response.ok) {
            const newVehicleModel = await response.json()
            console.log(newVehicleModel)
        } else {
            console.log('error')
        }

        const cleared = {
            name: "",
            picture_url: "",
            manufacturer_id: ""
        }
        this.setState(cleared)
    }


    handleNameChange(event) {
        const value = event.target.value
        this.setState({ name: value })
    }
    handlePictureUrlChange(event) {
        const value = event.target.value
        this.setState({ picture_url: value })
    }
    handleManufacturerChange(event) {
        const value = event.target.value
        this.setState({ manufacturer_id: value })
    }


    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            this.setState({ manufacturers: data.manufacturers })
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Add Vehicle Model</h1>
                            <form onSubmit={this.handleSubmit} id="modelform">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handlePictureUrlChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                                    <label htmlFor="picture_url">Picture URL</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleManufacturerChange} placeholder="Manufacturer" required name="manufacturers" id="manufacturers" className="form-select">
                                        <option value="">Choose a manufacturer</option>
                                        {this.state.manufacturers.map(manufacturer => {
                                            return (
                                                <option key={manufacturer.id} value={manufacturer.id}>
                                                    {manufacturer.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button className="btn btn-outline-dark">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default ModelForm