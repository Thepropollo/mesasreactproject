import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/HomePage';
import Login from './assets/Login';
import Reserva from './assets/Reserva';
import Factura from './assets/Factura';
import Chino from './assets/Chino';
import Italiano from './assets/Italiano';   
import Asadero from './assets/Asadero';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<HomePage />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/reserva" element={<Reserva />} />
                <Route path="/factura" element={<Factura />} />
                <Route path="/chino" element={<Chino />} />
                <Route path="/italiano" element={<Italiano />} />
                <Route path="/asadero" element={<Asadero />} />
            </Routes>
        </Router>
    );
};

export default App;
