import React from 'react';
import { Link } from "react-router-dom";
import './Modal.css';

function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <Link to="/login"><li>Entre ou cadastre-se</li></Link>
        <Link to="/orders"><li>Meus pedidos</li></Link>
      </div>
    </div>
  );
}

export default Modal;
