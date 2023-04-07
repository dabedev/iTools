import React from 'react';


const NewPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="" alt="logo" className="nav-logo" />
                <h1 className="title">Crea una nueva contraseña</h1>
                <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
                <form action="/" className="form">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <label htmlFor="new-password" className="label">Repite la contraseña</label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <input
                        type="submit"
                        value="Confirmar"
                        className="primary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;