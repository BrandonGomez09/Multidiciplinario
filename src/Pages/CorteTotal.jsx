import React from 'react';
import CorteCajaComponent from '../components/CorteCajaComponent/CorteCajaComponent';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo'
import Header from '../components/GlobalAdmi/Header';
import Navigation from '../components/GlobalAdmi/Navigation';

import TableComponent from '../components/TableComponent/TableComponent';
import EmployeeDetails from '../components/EmployeeDetails/EmployeeDetails';
import TotalTurnos from '../components/TotalTurnos/TotalTurnos';

function CorteTotal () {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <AdditionalInfo></AdditionalInfo>
      <TableComponent></TableComponent>
      <TotalTurnos></TotalTurnos>
      <CorteCajaComponent></CorteCajaComponent>
      <EmployeeDetails></EmployeeDetails>
    </div>
  );
}

export default CorteTotal;
