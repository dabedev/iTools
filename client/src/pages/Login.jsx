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
        response.then(function (response) {
            alert(response.data.message);
            setValue('token', response.data.token);
            setValue('userData', response.data.userData);
            console.log(authentication)
            return window.location.href = '/my-account';
        }).catch(function (error) {
            console.log(error)
            alert(error.response.data.message);
        });
    }

    return (
        <div className="signin">
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