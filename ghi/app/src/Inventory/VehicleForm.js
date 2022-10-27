import React from 'react'


class VehicleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      picture_url: "",
      manufacturers: [],
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePictureChange = this.handlePictureChange.bind(this)
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    const value = event.target.value
    this.setState({name: value})
  }
  handlePictureChange(event) {
    const value = event.target.value
    this.setState({picture_url: value})
  }
  handleManufacturerChange(event) {
    const value = event.target.value
    this.setState({manufacturer: value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const data = {...this.state}
    delete data.manufacturers
    data.manufacturer_id = data.manufacturer
    delete data.manufacturer
    console.log(data)

    const vehicleUrl = 'http://localhost:8100/api/models/'
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(vehicleUrl, fetchConfig)
    if (response.ok) {
      const newVehicle = await response.json()
      console.log("new appointment:::::", newVehicle)

      const cleared = {
        name: "",
        picture_url: "",
        manufacturer: "",
      }
      this.setState(cleared)
    } else {
      console.error("bad request")
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      this.setState({manufacturers: data.manufacturers})
    } else {
      console.error("invalid request")
    }
  }

  render () {
    return (
      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="mt-3">Add a vehicle model</h1>
          <form onSubmit={this.handleSubmit} id="create-vehicle-model-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleNameChange} value={this.state.name} placeholder="name" required type="text" name="name" id="name" className="form-control"/>
              <label htmlFor="name">Model name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handlePictureChange} value={this.state.picture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control"/>
              <label htmlFor="picture_url">Picture Url</label>
            </div>
            <div className="mb-3">
              <select onChange={this.handleManufacturerChange} required id="manufacturer" name="manufacturer" className="form-select">
                <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option value={manufacturer.id} key={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    )
                  })}
              </select>
            </div>
            <button className="btn btn-primary">Create Model</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}


export default VehicleForm
