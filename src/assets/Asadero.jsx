import React, { useState } from 'react';
import useDynamicCSS from './useDynamicCSS';

const ElAsaderoGourmet = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useDynamicCSS('../css/asatilo.css');
  
    const carouselItems = [
      { src: '../recursos/BChr5mKi9byKZVn7sN7m.jpg', caption: 'Carne Asada' },
      { src: '../recursos/Costillas-de-cerdo-a-la-BBQ.jpg', caption: 'Costillas BBQ' },
      { src: '../recursos/chorizo-asado_1000x.jpg', caption: 'Chorizo Parrillero' },
      { src: '../recursos/Pollo-a-al-abrasa.jpg', caption: 'Pollo a la Brasa' },
    ];
  
    const handlePrev = (e) => {
      e.preventDefault();
      setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };
  
    return (
      <div className="page-wrapper">
        <nav className="navbar">
          <div className="container nav-content">
            <div className="nav-logo">
              <img src="../recursos/logotablitaeltartaro-1705963669711.png" alt="Logo El Asadero" />
            </div>
            <div className="nav-items">
              <div className="nav-title">Tablita del Tártaro</div>
              <div className="nav-links">
                <a href="/">Inicio</a>
                <a href="#contacto">Quienes Somos</a>
                <a href="#Menu">Menú</a>
                <a href="#contacto">Contáctenos</a>
              </div>
            </div>
            <div className="reservation-button">
              <a href="/reserva">Reservar</a>
            </div>
          </div>
        </nav>
  
        <main className="container">
          <h1>Nuestras Especialidades</h1>
          <div id="Menu" className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {carouselItems.map((item, index) => (
                <div key={index} className="carousel-item">
                  <img src={item.src} alt={item.caption} />
                  <div className="carousel-caption">{item.caption}</div>
                </div>
              ))}
            </div>
            <a href="prev" className="carousel-prev" onClick={handlePrev}>&lt;</a>
            <a href="next" className="carousel-next" onClick={handleNext}>&gt;</a>
          </div>
        </main>
  
        <footer className="footer">
          <div id="contacto" className="container">
            <p>&copy; 2024 Tablita del Tártaro. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    );
  };
  
  export default ElAsaderoGourmet;
  