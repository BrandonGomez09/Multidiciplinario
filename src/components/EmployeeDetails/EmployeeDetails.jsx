import React from 'react';
import './EmployeeDetails.css'

function EmployeeDetails() {
  return (
    <div className="employee-details clear-float"> {/* Agrega la clase clear-float */}
      <div className="detail">
        <p>Nombre del empleado</p>
        <input type="text" placeholder="Agregar nombre" />
        <hr />
      </div>
      <div className="detail">
        <p>Turno</p>
        <input type="text" placeholder="Agregar turno" />
        <hr />
      </div>
      <div className="detail">
        <p>Fecha</p>
        <input type="text" placeholder="Agregar fecha" />
        <hr />
      </div>
    </div>
  );
}

export default EmployeeDetails;
