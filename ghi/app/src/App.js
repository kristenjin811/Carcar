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
          <Route path="models/" element={<ModelList models={props.models} />} />
          <Route path="models/new/" element={<ModelForm />} />
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments} />} />
          <Route path="sales/" element={<SalesList sales_records={props.sales_records} />} />
          <Route path="sales/rep" element={<SalesListByRep sales_records={props.sales_records} />} />
          <Route path="customer/" element={<CustomerForm />} />
          <Route path="salesperson/" element={<SalesRepForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
