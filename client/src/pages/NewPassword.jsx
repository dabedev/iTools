import React from 'react';
import '@styles/NewPassword.scss';

import yardSale from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return (
        <div class="login">
            <div class="form-container">
                <img src={yardSale} alt="logo" class="nav-logo" />
                <h1 class="title">Crea una nueva contraseña</h1>
                <p class="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
                <form action="/" class="form">
                    <label htmlFor="password" class="label">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        class="input input-password"
                    />
                    <label htmlFor="new-password" class="label">Repite la contraseña</label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        class="input input-password"
                    />
                    <input
                        type="submit"
                        value="Confirmar"
                        class="primary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;