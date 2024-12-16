import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDynamicCSS from './useDynamicCSS'; // Importa el hook personalizado

const Login = () => {
    const [isToggled, setIsToggled] = useState(false);
    const navigate = useNavigate();

    // Carga dinámica del CSS de inicio de sesión
    useDynamicCSS('../css/logstyle.css'); // Cambia la ruta si es necesario

    const handleToggle = () => setIsToggled(!isToggled);

    const validateFields = (fields) => fields.every(field => field.value.trim() !== "");
    const validateEmail = (email) => email.endsWith('@gmail.com');
    const validatePassword = (password) => password.length >= 6;

    const handleRegistration = (event) => {
        event.preventDefault();
        const fields = Array.from(document.querySelectorAll('.sign-up input'));
        const [nombre, correo, contraseña, repetirContraseña] = fields;

        if (!validateFields(fields)) return alert("Por favor, complete todos los campos.");
        if (!validateEmail(correo.value)) return alert("El correo debe ser un @gmail.com.");
        if (!validatePassword(contraseña.value)) return alert("La contraseña debe tener al menos 6 caracteres.");
        if (contraseña.value !== repetirContraseña.value) return alert("Las contraseñas no coinciden.");

        const usuario = { nombre: nombre.value, correo: correo.value, contraseña: contraseña.value };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert("Registro exitoso. Ahora puede iniciar sesión.");
        setIsToggled(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const fields = Array.from(document.querySelectorAll('.sign-in input'));
        const [correo, contraseña] = fields;

        if (!validateFields(fields)) return alert("Por favor, complete todos los campos.");

        const usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));

        if (!usuarioRegistrado) return alert("No se encontró un usuario registrado.");

        if (usuarioRegistrado.correo === correo.value.trim() && usuarioRegistrado.contraseña === contraseña.value.trim()) {
            alert("Inicio de sesión exitoso");
            navigate("/reserva");
        } else {
            alert("Correo o contraseña incorrectos");
        }
    };

    const togglePasswordVisibility = (inputField) => {
        const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputField.setAttribute('type', type);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="bar-container">
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
            <div className={`container ${isToggled ? 'toggle' : ''}`}>
                <div className="container-form">
                    <form className="sign-in" onSubmit={handleLogin}>
                        <h2>Iniciar sesión</h2>
                        <span>Use su correo y contraseña</span>
                        <div className="container-input">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" placeholder="correo" />
                        </div>
                        <div className="container-input">
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" placeholder="contraseña" />
                            <button type="button" onClick={() => togglePasswordVisibility(document.querySelector(".sign-in input[placeholder='contraseña']"))} className="toggle-password">👁️</button>
                        </div>
                        <button className="boton" id="iniciar">Iniciar sesión</button>
                        <span>Inicie sesión con</span>
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                    </form>
                </div>
                <div className="container-form">
                    <form className="sign-up" onSubmit={handleRegistration}>
                        <h2>Registrarse</h2>
                        <span>Ingrese los datos solicitados</span>
                        <div className="container-input">
                            <ion-icon name="person-add-outline"></ion-icon>
                            <input type="text" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="container-input">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" placeholder="correo" />
                        </div>
                        <div className="container-input">
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" placeholder="Crear contraseña" />
                            <button type="button" onClick={() => togglePasswordVisibility(document.querySelector(".sign-up input[placeholder='Crear contraseña']"))} className="toggle-password">👁️</button>
                        </div>
                        <div className="container-input">
                            <ion-icon name="reload-outline"></ion-icon>
                            <input type="password" placeholder="Repetir contraseña" />
                            <button type="button" onClick={() => togglePasswordVisibility(document.querySelector(".sign-up input[placeholder='Repetir contraseña']"))} className="toggle-password">👁️</button>
                        </div>
                        <button className="boton" id="registro">Registrarse</button>
                        <span>Registrarse con</span>
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                    </form>
                </div>
                <div className="container-welcome">
                    <div className="welcome-sign-up welcome">
                        <h3>Bienvenido</h3>
                        <p>Ingrese su correo y contraseña para poder hacer reservaciones en nuestro restaurante</p>
                        <button className="boton" id="btn-sign-up" onClick={handleToggle}>Registrarse</button>
                    </div>
                    <div className="welcome-sign-in welcome">
                        <h3>Bienvenido</h3>
                        <p>Regístrese para poder hacer reservaciones en nuestro restaurante</p>
                        <button className="boton" id="btn-sign-in" onClick={handleToggle}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;