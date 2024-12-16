import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import useDynamicCSS from './useDynamicCSS';

const Dinastia = () => {
  useEffect(() => {
    // Cargar el sonido
    const audio = new Audio('../recursos/effecto de sonido.mp3');
    // Reproducir el sonido
    audio.play();
  }, []);

  useDynamicCSS('../css/stylechino.css'); 

  const handleReservaClick = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '¡Reserva!',
      text: '¿Desea realizar una reserva?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, reservar',
      cancelButtonText: 'No, gracias'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = event.target.href;
      }
    });
  };

  const handleInicioClick = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '¡Inicio!',
      text: '¿Desea volver al inicio?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, ir al inicio',
      cancelButtonText: 'No, gracias'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = event.target.href;
      }
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a href="/chino" className="logo">
            <img src="../recursos/jesus.png" alt="Logo Restaurante" />
          </a>
          <h2> Shifa Dinastia!</h2>
          <div className="user-actions">
            <a href="/" className="nav-button" onClick={handleInicioClick}>Inicio</a>
            <a href="reserva" className="nav-button" onClick={handleReservaClick}>Reserva</a>
          </div>
        </div>
      </nav>

      <section className="container-images">
        <h2>Menú del día</h2>
        <br />
        <br />
        <div className="menu-images">
          <figure>
            <img src="../recursos/comida china 1.jpg" alt="Plato 1" />
            <figcaption>Dim sum de cerdo </figcaption>
          </figure>
          <figure>
            <img src="../recursos/comida china 2.jpg" alt="Plato 2" />
            <figcaption> Tofu marinado </figcaption>
          </figure>
          <figure>
            <img src="../recursos/comida china 3.jpeg" alt="Plato 3" />
            <figcaption>Ramen</figcaption>
          </figure>
        </div>
      </section>

      <footer className="footer">
        <h2>Contáctanos</h2>
        <p>Dirección: Calle Ficticia 123</p>
        <p>Correo: <a href="mailto:dinastiachina@gmail.com">dinastiachina@gmail.com</a></p>
        <p>Horario: Lunes a Sábado 10:00 AM - 10:00 PM</p>
      </footer>
    </div>
  );
};

export default Dinastia;