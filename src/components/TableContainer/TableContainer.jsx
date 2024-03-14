import React from 'react';
import basura from '../../img/basura.png';
import './TableContainer.css';

function TableContainer() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio Venta</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Quitar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="delete-icon-container">
              <button className="delete-button">
                <img src={basura} alt="" className="icon delete-icon" />
              </button>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="delete-icon-container">
              <button className="delete-button">
              <img src={basura} alt="" className="icon delete-icon" />
              </button>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="delete-icon-container">
              <button className="delete-button">
              <img src={basura} alt="" className="icon delete-icon" />
              </button>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="delete-icon-container">
              <button className="delete-button">
              <img src={basura} alt="" className="icon delete-icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
