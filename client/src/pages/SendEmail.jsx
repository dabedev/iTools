import React from 'react';
import '@styles/PasswordRecovery.scss';

import yardSale from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';

const SendEmail = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={yardSale} alt="logo" className="nav-logo" />
                <h1 className="title">¡Correo enviado!</h1>
                <p className="subtitle">Revisa tu bandeja de entrada para ver las instrucciones de cómo recuperar tu contraseña</p>
                <div className="email-image">
                    <img src={emailIcon} alt="email" />
                </div>
                <button className="primary-button login-button">Acceder</button>
                <p className="resend">
                    <span>¿No recibiste el correo?</span>
                    <a href="/">Reenvía</a>
                </p>
            </div>
        </div>
    );
};

export default SendEmail;