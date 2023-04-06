import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AppContext from '@context/AppContext';

import apiKeys from '@config/apiKeys.json';

import '@styles/Form.scss';

const Login = () => {
    const form = useRef(null);
    const { useAuthentication } = useContext(AppContext);
    const { setValue, authentication } = useAuthentication();
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const apiUrl = 'http://localhost:4000/auth/signin';
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        const response = axios.post(apiUrl, data);
        response
            .then(function (response) {
                setValue('token', response.data.token);
                setValue('userData', response.data.userData);
                const notification = document.querySelector('.notification');
                notification.innerText = response.data.message;
                notification.classList.remove('notification--error');
                notification.classList.add('notification--success');
                notification.style.display = 'block';
                setTimeout(() => {
                    window.location.href = '/my-account';
                }, 2 * 1000);
            })
            .catch(function (error) {
                const notification = document.querySelector('.notification');
                notification.innerText = error.response.data.message;
                notification.classList.remove('notification--success');
                notification.classList.add('notification--error');
                notification.style.display = 'block';
            });
    };


    return (
        <div className="signin">
            <div className='notification'></div>
            <div className="form-container">
                <form className="form" ref={form}>
                    <label htmlFor="email" className="label">Email</label>
                    <input type="text" name="email" placeholder="mail@example.com" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button className="primary-button" onClick={submitHandler}>Sign in</button>
                    <br />
                    <Link to="/password-recovery" className='forgot-password'>Forgot your password?</Link>
                    <br />
                    <Link to="/sign-up" className='forgot-password'>You don't have an accout? Sign up!</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;