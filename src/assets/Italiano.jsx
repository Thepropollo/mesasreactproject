import React from 'react';
import { Link } from 'react-router-dom';
import useDynamicCSS from './useDynamicCSS';

const ItalianoPage = () => {
    useDynamicCSS('../css/styleitaliano.css');
    return (
        <div>
            {/* Barra de navegación */}
            <header>
                <nav className="navbar">
                    <ul>
                        <Link to="/italiano" className="logo">
                            <img src="../recursos/vane.png" alt="Logo Restaurante" />
                        </Link>
                        <div className="user-actions">
                            <Link to="/">Inicio</Link>
                            <a href="#menu">Menú</a>
                            <Link to="/reserva">Reservar</Link>
                            <a href="#contacto">Contacto</a>
                        </div>
                    </ul>
                </nav>
            </header>

            {/* Sección de inicio */}
            <section id="inicio" className="hero">
                <h1>Bienvenidos a La Dolce Vita</h1>
                <p>La mejor experiencia de comida italiana en la ciudad.</p>
                {/* Enlace que abrirá el menú en PDF */}
                <a href="../pdf/menu.pdf" className="button" target="_blank">Ver Menú Completo</a>
            </section>

            {/* Sección de menú */}
            <section id="menu" className="menu-section">
                <h2>Platos más pedidos</h2>
                <div className="menu">
                    {/* Pasta Carbonara */}
                    <div className="menu-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIFhz1MKYnehsdWQDI3In_fV3hJtrdcdpXA&s" alt="Pasta Carbonara" />
                        <h3>
                            <h4>Pasta Carbonara</h4>
                        </h3>
                        <p>Deliciosa pasta con salsa carbonara.</p>
                        <span>$12</span>
                    </div>
                    <div className="menu-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7-18uhQBshQdfFRgRRciaLghKoajjI9A3g&s" alt="Pizza Margherita" />
                        <h3>
                            <h4>Pizza Margherita</h4>
                        </h3>
                        <p>Auténtica pizza con tomate, mozzarella y albahaca fresca.</p>
                        <span>$10</span>
                    </div>
                    <div className="menu-item">
                        <img src="https://www.mariberico.cl/web/wp-content/uploads/2018/09/lasana-bolonesa.jpg" alt="Lasaña Boloñesa" />
                        <h3>
                            <h4>Lasaña Boloñesa</h4>
                        </h3>
                        <p>Lasaña clásica con carne y salsa boloñesa.</p>
                        <span>$14</span>
                    </div>
                </div>
            </section>

            {/* Sección de contacto */}
            <section id="contacto" className="contact-section">
                <h2>Contacto</h2>
                <p>Dirección: Barbasquillo</p>
                <p>Teléfono: +0969444323</p>
                <p>Email: contacto@ladolcevita.com</p>
            </section>

            {/* Sección de footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p>&copy; 2024 La Dolce Vita. Todos los derechos reservados.</p>
                    <div className="social-icons">
                        <a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ItalianoPage;