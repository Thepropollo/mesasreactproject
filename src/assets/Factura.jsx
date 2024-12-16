import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDynamicCSS from './useDynamicCSS'; // Importa el hook personalizado

const Factura = () => {
    const [mesasSeleccionadas, setMesasSeleccionadas] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPersonas, setTotalPersonas] = useState(0);
    const costoPorMesa = 25;
    const capacidadPorMesa = 4;
    const navigate = useNavigate();

    useDynamicCSS('../css/fee.css'); // Cambia la ruta si es necesario

    useEffect(() => {
        const reservationData = JSON.parse(localStorage.getItem('reserva')) || {};
        const mesas = reservationData.mesas || [];
        setMesasSeleccionadas(mesas);
        setTotal(mesas.length * costoPorMesa);
        setTotalPersonas(mesas.length * capacidadPorMesa);
    }, []);

    const handleConfirm = () => {
        alert('Reserva confirmada');
        navigate('/reserva');
    };

    const handleCancel = () => {
        alert('Reserva cancelada');
        navigate('/reserva');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="/" className="logo">
                        <img src="../recursos/logo.png" alt="Logo Restaurante" />
                    </a>
                    <div className="user-actions">
                        <ion-icon name="home-outline"></ion-icon>
                        <button className="inicio-button">
                        <Link to="/" className="inicio-button">Inicio</Link>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="reservation-container">
                    <h2>Factura de Reserva</h2>
                    <div className="details">
                        <p id="mesa-seleccionada">
                            <strong>Mesas seleccionadas:</strong> {mesasSeleccionadas.length ? mesasSeleccionadas.join(', ') : 'No se han seleccionado mesas.'}
                        </p>
                        <p id="capacidad"><strong>Capacidad total:</strong> {mesasSeleccionadas.length ? `${totalPersonas} personas` : ''}</p>
                        <p><strong>Costo por reserva:</strong> $25 por mesa</p>
                    </div>
                    <div className="total">
                        <p id="total-a-pagar"><strong>Total a pagar:</strong> ${total}</p>
                    </div>
                    <div className="confirmation">
                        <button id="final-confirm" onClick={handleConfirm}>Aceptar</button>
                        <button id="cancel" onClick={handleCancel}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Factura;