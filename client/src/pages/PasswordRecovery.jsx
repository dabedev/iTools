import React from 'react';
import '@styles/PasswordRecovery.scss';
import yardSale from "@logos/logo_yard_sale.svg";


const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src={yardSale} alt="logo" className="logo" />
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