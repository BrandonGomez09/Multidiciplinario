import React from 'react';
import './ActionsContainer.css';

function ActionsContainer() {
  return (
    <div className="actions-container">
      <button className="action-button yellow">Agregar</button>
      <button className="action-button red">Cancelar</button>
      <button className="action-button green">Realizar</button>
    </div>
  );
}

export default ActionsContainer;
