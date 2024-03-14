import React from 'react';
import CorteCajaComponent from '../components/CorteCajaComponent/CorteCajaComponent';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo'
import Header from '../components/GlobalAdmi/Header';
import Navigation from '../components/GlobalAdmi/Navigation';
import InfoComponent from '../components/InfoComponent/InfoComponent';
import TableComponent from '../components/TableComponent/TableComponent';
import EmployeeDetails from '../components/EmployeeDetails/EmployeeDetails';

function CorteCaja () {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <AdditionalInfo></AdditionalInfo>
      <TableComponent></TableComponent>
      <InfoComponent></InfoComponent>
      <CorteCajaComponent></CorteCajaComponent>
      <EmployeeDetails></EmployeeDetails>
    </div>
  );
}

export default CorteCaja;
