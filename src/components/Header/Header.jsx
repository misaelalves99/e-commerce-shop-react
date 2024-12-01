import '../Header/Header.css';
import React, { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Modal from '../Modal/Modal';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Função para abrir o modal quando passar o mouse sobre o perfil
    const handleMouseEnter = () => {
        setShowModal(true);
    };

    // Função para fechar o modal ao retirar o mouse tanto do perfil quanto do modal
    const handleMouseLeave = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className='header'>
                <div className="bar1">
                    <div className="bar1-container">
                        <div className='logo'>
                            <a href="/">
                                <FaCartPlus className="icon-logo" />
                                <h1>E-Commerce Shop</h1>
                            </a>
                        </div>
                        <div className='user'>
                            <div className='cart-user'>
                                <Link to="/cart"><FaCartPlus /></Link>
                            </div>
                            <div className='favorites-user'>
                                <Link to="/favorites"><MdFavorite /></Link>
                            </div>
                            <div className='profile-user' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <Link><FaUser /></Link>
                                {/* Exibe o modal enquanto o mouse estiver em cima */}
                                {showModal && (
                                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <Modal />
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
