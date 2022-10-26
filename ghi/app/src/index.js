import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadData() {
  const serviceResponse = await fetch("http://localhost:8080/api/service/")
  const modelResponse = await fetch("http://localhost:8100/api/models/")
  const salesResponse = await fetch("http://localhost:8090/api/salesrecords/")

  const serviceData = await serviceResponse.json()
  const modelData = await modelResponse.json()
  const salesData = await salesResponse.json()
  console.log(salesData)
  console.log(modelData)

  if (serviceResponse.ok && modelResponse.ok && salesResponse.ok) {
    root.render(
      <React.StrictMode>
        <App
          service_appointments={serviceData.service_appointments}
          models={modelData.models}
          sales_records={salesData.sales_records}
        />
      </React.StrictMode>
    );
  } else {
    console.error("response not ok", serviceResponse, modelResponse)
  }
}

loadData()
