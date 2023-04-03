import React, { useRef } from 'react';
import axios from 'axios';
import '@styles/Login.scss';

import yardSale from '@logos/logo_yard_sale.svg';

const Login = () => {
    const form = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={yardSale} alt="logo" className="nav-logo" />
                <form className="form" ref={form}>
                    <label htmlFor="email" className="label">Correo electrónico</label>
                    <input type="text" name="email" placeholder="correo@example.com" className="input input-email" />
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button className="primary-button login-button" onClick={submitHandler}>Acceder</button>
                    <a href="/">Olvidé mi contraseña</a>
                </form>
                <button className="secondary-button signup-button">Registrarse</button>
            </div>
        </div>
    )
}

export default Login;