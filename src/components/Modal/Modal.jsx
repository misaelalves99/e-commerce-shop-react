import React from 'react';
import { Link } from "react-router-dom";
import './Modal.css';

function Modal({ isAuthenticated, onLogout }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {isAuthenticated ? (
          <>
            <Link to="/orders"><li>Meus pedidos</li></Link>
            <li>
              <button onClick={onLogout} className="logout-btn">Sair</button>
            </li>
          </>
        ) : (
          <Link to="/login"><li>Entre ou cadastre-se</li></Link>
        )}
      </div>
    </div>
  );
}

export default Modal;
