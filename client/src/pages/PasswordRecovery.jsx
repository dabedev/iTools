import React from 'react';



const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src="" alt="logo" className="logo" />
                <h1 className="title">Recuperar contraseña</h1>
                <p className="subtitle">Ingresa tu correo electrónico</p>
                <form action="/" className="form">
                    <label htmlhtmlFor="email" className="label">Correo electrócnico</label>
                    <input type="text" id="email" className="input input-email" />
                    <input type="submit" value="Confirmar" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default PasswordRecovery;