import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppointmentList from './Autoservice/AppointmentList'
import TechnicianForm from './Autoservice/TechnicianForm'
import ServiceHistory from './Autoservice/ServiceHistory'
import AppointmentForm from './Autoservice/AppointmentForm'
import ManufacturerList from './Inventory/ManufacturerList'
import ManufacturerForm from './Inventory/ManufacturerForm'
import VehicleList from './Inventory/VehicleList'
import VehicleForm from './Inventory/VehicleForm'
import MainPage from './MainPage'
import Nav from './Nav'

function App(props) {
  if (props.service_appointments === undefined) {
    return null
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians/new/" element={<TechnicianForm/>}/>
          <Route path="service/history/" element={<ServiceHistory/>}/>
          <Route path="service/new/" element={<AppointmentForm/>}/>
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments}/>}/>
          <Route path="manufacturers/" element={<ManufacturerList manufacturers={props.manufacturers}/>}/>
          <Route path="manufacturers/new/" element={<ManufacturerForm/>}/>
          <Route path="models/" element={<VehicleList vehicles={props.models}/>}/>
          <Route path="models/new/" element={<VehicleForm/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
