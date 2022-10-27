import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavLink className="navbar-brand" to="models/">Models</NavLink>
        <NavLink className="navbar-brand" to="service/">Appointments</NavLink>
        <NavLink className="navbar-brand" to="sales/">All Sales</NavLink>
        <NavLink className="navbar-brand" to="sales/new">Add Sale</NavLink>
        <NavLink className="navbar-brand" to="sales/rep">Rep's Sales</NavLink>
        <NavLink className="navbar-brand" to="customer/">Add Customer</NavLink>
        <NavLink className="navbar-brand" to="salesperson/">Add Sales Rep</NavLink>
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
                <NavLink className="dropdown-item" to="service/new/">New appointment</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="service/history/">Service History</NavLink>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <NavLink className="dropdown-item" to="technicians/new/">New technician</NavLink>
              </li>
            </ul>
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
                  <NavLink className="dropdown-item" to="service/new/">New appointment</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="service/history/">Service History</NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <NavLink className="dropdown-item" to="technicians/new/">New technician</NavLink>
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
                <li>
                  {/* <NavLink className="dropdown-item" to="models/">Vehicles</NavLink> */}
                </li>
                <li>
                  <NavLink className="dropdown-item" to="automobiles/new/">Add an automobile</NavLink>
                </li>
              </ul>
            </div>
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
              <li>
                {/* <NavLink className="dropdown-item" to="models/">Vehicles</NavLink> */}
              </li>
              <li>
                <NavLink className="dropdown-item" to="automobiles/new/">Add an automobile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
