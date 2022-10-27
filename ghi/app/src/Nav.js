import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* first dropdown button starts here */}
          <div className="btn-group">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="service/">Appointments</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="service/new/">Add appointment</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="service/history/">Service History</NavLink>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <NavLink className="dropdown-item" to="technicians/new/">Add technician</NavLink>
              </li>
            </ul>
          </div>

          {/* second dropdown button starts here */}
          <div className="btn-group">
              <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="manufacturers/">Manufacturers</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="manufacturers/new/">Add a manufacturer</NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <NavLink className="dropdown-item" to="models/">Models</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="models/new/">Add a model</NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <NavLink className="dropdown-item" to="automobiles/">Automobiles</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="automobiles/new/">Add an automobile</NavLink>
                </li>
              </ul>
          </div>

          {/* third dropdown button starts here */}
          <div className="btn-group">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="sales/">All Sales</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="sales/new">Add Sale</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="sales/rep">Rep's Sales</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="salesperson/">Add Sales Rep</NavLink>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <NavLink className="dropdown-item" to="customer/">Add Customer</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
