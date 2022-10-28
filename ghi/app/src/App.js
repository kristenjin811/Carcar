import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Nav from './Nav'

import ModelList from './Inventory/ModelList'
import ModelForm from './Inventory/ModelForm'
import ManufacturerList from './Inventory/ManufacturerList'
import ManufacturerForm from './Inventory/ManufacturerForm'
import AutomobileForm from './Inventory/AutomobileForm'
import AutomobileList from './Inventory/AutomobileList'

import SalesList from './Sales/SalesList'
import SalesListByRep from './Sales/SalesByRep'
import CustomerForm from './Sales/CustomerForm'
import SalesRepForm from './Sales/SalesRepForm'
import SalesRecordForm from './Sales/SalesRecordForm'

import AppointmentList from './Autoservice/AppointmentList'
import TechnicianForm from './Autoservice/TechnicianForm'
import ServiceHistory from './Autoservice/ServiceHistory'
import AppointmentForm from './Autoservice/AppointmentForm'

function App(props) {
  if (props.service_appointments === undefined
    && props.models === undefined
    && props.sales_records === undefined) {
    return null
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="service/history/" element={<ServiceHistory />} />
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments} />} />
          <Route path="service/new/" element={<AppointmentForm />} />
          <Route path="technicians/new/" element={<TechnicianForm />} />

          <Route path="sales/" element={<SalesList sales_records={props.sales_records} />} />
          <Route path="sales/new/" element={<SalesRecordForm />} />
          <Route path="sales/rep" element={<SalesListByRep sales_records={props.sales_records} />} />
          <Route path="customer/" element={<CustomerForm />} />
          <Route path="salesperson/" element={<SalesRepForm />} />

          <Route path="manufacturers/" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />

          <Route path="automobiles/" element={<AutomobileList automobiles={props.automobiles} />} />
          <Route path="automobiles/new/" element={<AutomobileForm automobiles={props.autos} />} />

          <Route path="models/" element={<ModelList models={props.models} />} />
          <Route path="models/new/" element={<ModelForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
