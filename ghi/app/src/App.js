import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppointmentList from './service/AppointmentList'
import TechnicianForm from './service/TechnicianForm'
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
          <Route path="technicians/new" element={<TechnicianForm/>}/>
          <Route path="service/" element={<AppointmentList service_appointments={props.service_appointments}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
