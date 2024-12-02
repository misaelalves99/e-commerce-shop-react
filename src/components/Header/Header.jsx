import '../Header/Header.css';
import React, { useState, useContext, useEffect } from 'react';
import { FaSearch, FaCartPlus, FaUser } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import AppContext from '../../context/AppContext';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();
    const { cart, favorites } = useContext(AppContext);

    useEffect(() => {
        console.log(`Carrinho atualizado: ${cart.length} itens`);
    }, [cart]);
    
    useEffect(() => {
        console.log(`Favoritos atualizados: ${favorites.length} itens`);
    }, [favorites]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setShowModal(true);
    };

    const handleMouseLeave = () => {
        setShowModal(false);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <>
            <section className='header'>
                <div className="bar1">
                    <div className="bar1-container">
                        <div className='logo'>
                            <Link to="/">
                                <FaCartPlus className="icon-logo" />
                                <h1>E-Commerce Shop</h1>
                            </Link>
                        </div>
                        <div className='user'>
                            <div className='cart-user'>
                                <div>
                                    <Link to="/cart"><FaCartPlus /></Link>
                                    {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
                                </div>
                            </div>
                            <div className='favorites-user'>
                                <div>
                                    <Link to="/favorites"><MdFavorite /></Link>
                                    {favorites.length > 0 && <span className="favorite-counter">{favorites.length}</span>}
                                </div>
                            </div>
                            <div className='profile-user' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <Link><FaUser /></Link>
                                {showModal && (
                                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <Modal
                                            isAuthenticated={isAuthenticated}
                                            onLogout={handleLogout}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='range'/>
                <div className='bar2'>
                    <div className='bar2-container'>
                        <div className='search'>
                            <input type="text" placeholder='Pesquisar...'/>
                            <button className='search-icon'>
                                <FaSearch />
                            </button>
                        </div>
                        <nav className="navbar">
                            <button className="menu-button" onClick={toggleMenu}>
                                ☰
                            </button>
                            <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/produtos">Produtos</Link></li>
                                <li><Link to="/contato">Contato</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
