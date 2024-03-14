import React from 'react';
import ActionsContainer from '../components/AccionsContainer/ActionsContainer';
import EmployeeDetails from '../components/EmployeeDetails/EmployeeDetails';
import Header from '../components/GlobalAdmi/Header';
import Navigation from '../components/GlobalAdmi/Navigation';
import InfoContainer from '../components/InfoContainer/InfoContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import TableContainer from '../components/TableContainer/TableContainer';

function Ventas() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <SearchBar />
      <div className="table-and-info-container">
        <TableContainer />
        <InfoContainer />
      </div>
      <ActionsContainer />
      <EmployeeDetails />
    </div>
  );
}

export default Ventas;
