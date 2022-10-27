import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentList from './service/AppointmentList';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelList from './inventory/ModelList';
import ModelForm from './inventory/ModelForm';
import SalesList from './sales/SalesList';
import SalesListByRep from './sales/SalesByRep';
import CustomerForm from './sales/CustomerForm';
import SalesRepForm from './sales/SalesRepForm';
import SalesRecordForm from './sales/SalesRecordForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppointmentList from './Autoservice/AppointmentList'
import TechnicianForm from './Autoservice/TechnicianForm'
import ServiceHistory from './Autoservice/ServiceHistory'
import AppointmentForm from './Autoservice/AppointmentForm'
import ManufacturerList from './Inventory/ManufacturerList'
import ManufacturerForm from './Inventory/ManufacturerForm'
import AutomobileForm from './Inventory/AutomobileForm'
import MainPage from './MainPage'
import Nav from './Nav'

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
          <Route path="technicians/new/" element={<TechnicianForm />} />
          <Route path="service/history/" element={<ServiceHistory />} />
          <Route path="service/new/" element={<AppointmentForm />} />
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments} />} />
          <Route path="manufacturers/" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
          <Route path="models/" element={<ModelList models={props.models} />} />
          <Route path="models/new/" element={<ModelForm />} />
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments} />} />
          <Route path="sales/" element={<SalesList sales_records={props.sales_records} />} />
          <Route path="sales/new/" element={<SalesRecordForm />} />
          <Route path="sales/rep" element={<SalesListByRep sales_records={props.sales_records} />} />
          <Route path="customer/" element={<CustomerForm />} />
          <Route path="salesperson/" element={<SalesRepForm />} />
          <Route path="technicians/new/" element={<TechnicianForm />} />
          <Route path="service/history/" element={<ServiceHistory />} />
          <Route path="service/new/" element={<AppointmentForm />} />
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments} />} />
          <Route path="manufacturers/" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
