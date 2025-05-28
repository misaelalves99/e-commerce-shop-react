// src/components/Header/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaCartPlus, FaUser } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';

import styles from './Header.module.css';
import Modal from '../Modal/Modal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const profileRef = useRef<HTMLDivElement>(null);

  const { cart } = useCart();
  const { favorites } = useFavorites();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Carrinho atualizado: ${cart.length} itens`);
  }, [cart]);

  useEffect(() => {
    console.log(`Favoritos atualizados: ${favorites.length} itens`);
  }, [favorites]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnterProfile = () => {
    setShowModal(true);
  };

  const handleMouseLeaveProfile = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.bar1}>
        <div className={styles.bar1Container}>
          <div className={styles.logo}>
            <Link to="/">
              <FaCartPlus className={styles.iconLogo} />
              <h1>E-Commerce Shop</h1>
            </Link>
          </div>
          <div className={styles.user}>
            <div className={styles.cartUser}>
              <div>
                <Link to="/cart">
                  <FaCartPlus />
                </Link>
                {cart.length > 0 && (
                  <span className={styles.cartCounter}>{cart.length}</span>
                )}
              </div>
            </div>
            <div className={styles.favoritesUser}>
              <div>
                <Link to="/favorites">
                  <MdFavorite />
                </Link>
                {favorites.length > 0 && (
                  <span className={styles.favoriteCounter}>{favorites.length}</span>
                )}
              </div>
            </div>
            <div
              className={styles.profileUser}
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
              ref={profileRef}
            >
              <FaUser className={styles.profileIcon} />
              {showModal && (
                <Modal isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bar2}>
        <div className={styles.bar2Container}>
          <div className={styles.search}>
            <input type="text" placeholder="Search products" />
            <button className={styles.searchIcon}>
              <FaSearch />
            </button>
          </div>
          <div className={styles.navbar}>
            <ul className={styles.menuList}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Produtos</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
            <button className={styles.menuButton} onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
