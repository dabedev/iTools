import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import useFetchMe from '@hooks/useFetchMe';
import '@styles/Form.scss';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	const { useAuthentication } = useContext(AppContext);
	const { authentication } = useAuthentication();
	const apiUrl = 'http://localhost:4000/users/@me';
	const options = {
		headers: {
			'Authorization': 'Bearer ' + authentication.token
		},
		method: 'GET'
	}
	const user = useFetchMe(apiUrl, options);
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="form-title">My account</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label label-form">Name</label>
						<p className="value">{user.username}</p>
						<label htmlFor="email" className="label label-form">Email</label>
						<p className="value">{user.email}</p>
						<label htmlFor="id" className="label label-form">ID</label>
						<p className="value">{user.id}</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
