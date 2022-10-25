import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadAppointments() {
  const serviceResponse = await fetch("http://localhost:8080/api/service/")
  console.log(serviceResponse)
  if (serviceResponse.ok) {
    let data = await serviceResponse.json()
    console.log(data)
    root.render(
      <React.StrictMode>
        <App service_appointments={data.service_appointments}/>
      </React.StrictMode>
    );
  } else {
    console.error("response not ok", serviceResponse)
  }
}

loadAppointments()
