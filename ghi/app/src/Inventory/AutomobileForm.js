import React from 'react'


class AutomobileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "",
      year: "",
      vin: "",
      models: [],
    }
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleVinChange = this.handleVinChange.bind(this)
    this.handleModelChange = this.handleModelChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleColorChange(event) {
    const value = event.target.value
    this.setState({color: value})
  }
  handleYearChange(event) {
    const value = event.target.value
    this.setState({year: value})
  }
  handleVinChange(event) {
    const value = event.target.value
    this.setState({vin: value})
  }
  handleModelChange(event) {
    const value = event.target.value
    this.setState({model: value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const data = {...this.state}
    data.model_id = data.model
    delete data.model
    delete data.models
    console.log(data)

    const vehicleUrl = 'http://localhost:8100/api/automobiles/'
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }


    const response = await fetch(vehicleUrl, fetchConfig)
    if (response.ok) {
      const newAutomobile = await response.json()
      console.log("new appointment:::::", newAutomobile)

      const cleared = {
        color: "",
        year: "",
        vin: "",
        model: "",
      }
      this.setState(cleared)

      alert('A form was submitted: ' + this.state.vin + ' // ' + this.state.year)

    } else {
      console.error('Bad request')
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/models/'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      this.setState({models: data.models})
    } else {
      console.error("invalid vin: need to be unique!")
    }
  }

  render () {
    return (
      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="mt-3">Add an automobile</h1>
          <form onSubmit={this.handleSubmit} id="create-vehicle-model-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleColorChange} value={this.state.color} placeholder="color" required type="text" name="color" id="color" className="form-control"/>
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleYearChange} value={this.state.year} placeholder="year" required type="number" name="year" id="year" className="form-control"/>
              <label htmlFor="year">year</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleVinChange} value={this.state.vin} placeholder="vin" required type="text" maxLength={17} minLength={17} name="vin" id="vin" className="form-control"/>
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select onChange={this.handleModelChange} required id="model" name="model" className="form-select">
                <option value="">Choose a model</option>
                  {this.state.models.map(model => {
                    return (
                      <option value={model.id} key={model.id}>
                        {model.name}
                      </option>
                    )
                  })}
              </select>
            </div>
            <button className="btn btn-primary">Create Automobile</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}


export default AutomobileForm
