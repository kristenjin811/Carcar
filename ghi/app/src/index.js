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

  if (serviceResponse.ok && modelResponse.ok && salesResponse.ok) {
    const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/")
    const automobilesResponse = await fetch("http://localhost:8100/api/automobiles/")

    const serviceData = await serviceResponse.json()
    const modelData = await modelResponse.json()
    const manufacturerData = await manufacturerResponse.json()
    const automobilesData = await automobilesResponse.json()

    if (serviceResponse.ok && modelResponse.ok) {
      root.render(
        <React.StrictMode>
          <App
            service_appointments={serviceData.service_appointments}
            models={modelData.models}
            sales_records={salesData.sales_records}
            manufacturers={manufacturerData.manufacturers}
            automobiles={automobilesData.autos}
          />
        </React.StrictMode>
      )
    } else {
      console.error("response not ok", serviceResponse, modelResponse, manufacturerResponse, automobilesResponse)
    }
  }
}
loadData()
