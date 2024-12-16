import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDynamicCSS from './useDynamicCSS'; // Importa el hook personalizado

const Reservation = () => {
    const [isTableSelected, setIsTableSelected] = useState(false);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [selectedTables, setSelectedTables] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const navigate = useNavigate();

    // Carga dinámica del CSS de la reserva
    useDynamicCSS('../css/resstyle.css'); // Cambia la ruta si es necesario

    const handleTableClick = (table) => {
        setSelectedTables(prevTables => 
            prevTables.includes(table) 
            ? prevTables.filter(t => t !== table) 
            : [...prevTables, table]
        );
    };

    const handleConfirmTables = () => {
        if (selectedTables.length > 0) {
            setIsTableSelected(true);
        } else {
            alert('Debe seleccionar al menos una mesa.');
        }
    };

    const handleConfirmDate = () => {
        if (selectedDate) {
            setIsDateSelected(true);
        } else {
            alert('Por favor, seleccione una fecha.');
        }
    };

    const handleReservation = (event) => {
        event.preventDefault();
        if (selectedTables.length === 0) return alert('Debe seleccionar al menos una mesa.');
        if (!selectedDate) return alert('Por favor, seleccione una fecha.');
        if (!selectedTime) return alert('Por favor, seleccione una hora.');

        const reservationData = {
            mesas: selectedTables,
            fecha: selectedDate,
            hora: selectedTime
        };
        localStorage.setItem('reserva', JSON.stringify(reservationData));
        alert("Reserva realizada correctamente.");
        navigate("/factura");
    };

    const handleCancel = () => {
        setIsDateSelected(false);
        setIsTableSelected(false);
        setSelectedTables([]);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="bar-container">
                    <a href="/" className="logo">
                    <img src="../recursos/logo.png" alt="Logo Restaurante" />
                    </a>
                    <h2>¡Reserve su mesa!</h2>
                    <div className="user-actions">
                    <ion-icon name="home-outline"></ion-icon>
                    <button className="inicio-button">
                    <Link to="/" className="inicio-button">Inicio</Link>
                    </button>
                    </div>
                </div>
            </nav>
            <div className="reservation-container">
                <h2>Mesas disponibles</h2>
                <img src="../recursos/croqui.png" alt="Croquis del restaurante" className="croqui" />
                <div className={`selection-container ${isTableSelected ? 'hidden' : ''}`}>
                    <h2>Elija las mesas que desea reservar</h2>
                    <div className="buttons-container">
                        {Array.from({ length: 22 }, (_, i) => (
                            <button 
                                key={i} 
                                className={`mesa-button ${selectedTables.includes(`M${i + 1}`) ? 'selected' : ''}`} 
                                onClick={() => handleTableClick(`M${i + 1}`)}
                            >
                                M{i + 1}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleConfirmTables} className={`button ${selectedTables.length === 0 ? 'hidden' : ''}`}>Aceptar</button>
                </div>
                <div className={`date-selection ${isTableSelected && !isDateSelected ? '' : 'hidden'}`}>
                    <h2>Seleccione la fecha</h2>
                    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
                    <button onClick={handleConfirmDate}>Aceptar</button>
                </div>
                <form className={`reservation-form ${isDateSelected && !selectedTime ? '' : 'hidden'}`} onSubmit={handleReservation}>
                    <label htmlFor="time">Hora:</label>
                    <input type="time" id="time" name="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
                    <button type="submit">Aceptar</button>
                </form>
                <div className={`confirmation ${isDateSelected && selectedTime ? '' : 'hidden'}`}>
                    <h2>Confirmación de Reserva</h2>
                    <p id="confirmation-details">Mesas: {selectedTables.join(', ')}, Fecha: {selectedDate}, Hora: {selectedTime}</p>
                    <button className="button" onClick={handleReservation}>Aceptar</button>
                    <button className="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Reservation;