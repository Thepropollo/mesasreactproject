import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const indicators = [0, 1, 2];

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % indicators.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [indicators.length]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="carousel-item active">
                        <img src="../recursos/china.png" alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="../recursos/italia.png" alt="Imagen 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="../recursos/sushi.png" alt="Imagen 3" />
                    </div>
                </div>
                <div className="carousel-controls">
                    <button className="prev" onClick={() => showSlide((currentSlide - 1 + indicators.length) % indicators.length)}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="next" onClick={() => showSlide((currentSlide + 1) % indicators.length)}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div className="carousel-indicators">
                    {indicators.map((indicator, index) => (
                        <button key={index} className={currentSlide === index ? 'active' : ''} onClick={() => showSlide(index)}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Notification = ({ onClose }) => (
    <div className="notification">
        <p>Para poder reservar, primero debe registrarse o iniciar sesión si ya cuenta con una cuenta.</p>
        <button className="regresar" onClick={onClose}>Regresar</button>
        <Link to="/login" className="registrarse">Registrarse</Link>
    </div>
);

const InfoSection = ({ imgSrc, title, description, link }) => (
    <section className="info-section">
        <img src={imgSrc} alt={description} />
        <div className="info-text">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="reserve-button-container">
                <Link to={link} className="reserve-button">Reserve con nosotros</Link>
            </div>
        </div>
    </section>
);

const HomePage = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleReserveClick = () => {
        setShowNotification(true);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="/" className="logo"><img src="../recursos/logo.png" alt="Logo Restaurante" /></a>
                    <h2>¡Bienvenido a VLJR!</h2>
                    <div className="user-actions">
                        <Link to="/" className="inicio-button">Inicio</Link>
                        <Link to="/login" className="register-button">Registrarse</Link>
                    </div>
                </div>
            </nav>

            <section className="main-content">
                <div className="container">
                    <Carousel />
                </div>
                <div className="reserve-button-container">
                    <button className="reserve-button" onClick={handleReserveClick}>Reserva ahora</button>
                </div>
            </section>

            <InfoSection
                imgSrc="../recursos/jesus.png"
                title="Shifa Dinastia"
                description="Shifa Dinastía es un restaurante especializado en auténtica comida china, ofreciendo una experiencia culinaria única con sabores tradicionales y platos elaborados con ingredientes frescos y de alta calidad."
                link="/chino"
            />
            <InfoSection
                imgSrc="../recursos/vane.png"
                title="Dolce Vita"
                description="Dolce Vita es un restaurante italiano que celebra la esencia de la cocina mediterránea, ofreciendo pastas frescas, pizzas artesanales y sabores auténticos que te transportan al corazón de Italia."
                link="/italiano"
            />
            <InfoSection
                imgSrc="../recursos/Ramon.png"
                title="La tablita del Tartaro"
                description="La Tablita del Tártaro es un restaurante especializado en asados a la parrilla, donde los cortes de carne premium y las técnicas tradicionales se combinan para ofrecer una experiencia gastronómica llena de sabor y autenticidad."
                link="/asadero"
            />

            <footer className="footer">
                <div className="footer-container">
                    <p>&copy; 2024 VLJR. Todos los derechos reservados.</p>
                    <div className="social-icons">
                        <a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
            </footer>

            {showNotification && <Notification onClose={() => setShowNotification(false)} />}
        </div>
    );
};

export default HomePage;