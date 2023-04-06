import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '@styles/Form.scss';

const CreateAccount = () => {
	const form = useRef(null);

	const submitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const apiUrl = 'http://localhost:4000/auth/signup';
		const data = {
			username: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		};
		const response = axios.post(apiUrl, data);
		response.then(function (response) {
			const notification = document.querySelector('.notification');
			notification.innerText = response.data.message;
			notification.classList.remove('notification--error');
			notification.classList.add('notification--success');
			notification.style.display = 'block';
		})
			.catch(function (error) {
				const notification = document.querySelector('.notification');
				notification.innerText = error.response.data.message;
				notification.classList.remove('notification--success');
				notification.classList.add('notification--error');
				notification.style.display = 'block';
			});
	}

	return (
		<div className="signup">
			<div className='notification'></div>
			<div className="form-container">
				<form className="form" ref={form}>
					<label htmlFor="name" className="label">Name</label>
					<input type="text" name="name" placeholder="John Doe" className="input input-name" />
					<label htmlFor="email" className="label">Email</label>
					<input type="text" name="email" placeholder="mail@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button" onClick={submitHandler}>Sign up</button>
					<br />
					<Link to="/sign-in" className='forgot-password'>Already have an accout? Sign in!</Link>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
