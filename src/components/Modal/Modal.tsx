// src/components/Modal/Modal.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Substituto para o Link do Next.js
import { MdExitToApp } from 'react-icons/md';
import styles from './Modal.module.css';

interface ModalProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Modal: React.FC<ModalProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <div className={styles.modal}>
      <ul className={styles.modalContent}>
        {isAuthenticated ? (
          <>
            <li className={styles.modalItem}>
              <Link to="/profile">Dados Pessoais</Link>
            </li>
            <li className={styles.modalItem}>
              <Link to="/orders">Meus pedidos</Link>
            </li>
            <li className={styles.modalItem}>
              <Link to="/security">Segurança</Link>
            </li>
            <li className={styles.modalItem}>
              <Link to="/address">Endereço</Link>
            </li>
            <li className={styles.modalItem}>
              <button onClick={onLogout} className={styles.logoutBtn}>
                <MdExitToApp className={styles.logoutIcon} />
                Sair
              </button>
            </li>
          </>
        ) : (
          <>
            <li className={styles.modalItem}>
              <Link to="/login">Entrar</Link>
            </li>
            <li className={styles.modalItem}>
              <Link to="/register">Cadastrar</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Modal;
