import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import useFetchMe from '@hooks/useFetchMe';

import userAvatar from '@images/avatarDefault.jpg';
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
				<h1 className="title">My account</h1>
				<div>
					<label htmlFor="avatar" className="label">Avatar</label>
					<Link to="/my-account/update">
						<section className='user-avatar'>
							<img src={userAvatar} className='h-64 w-64' alt={user.name} />
						</section>
					</Link>
					<label htmlFor="name" className="label">Name</label>
					<p className="value">{user.username}</p>
					<label htmlFor="email" className="label">Email</label>
					<p className="value">{user.email}</p>
					<label htmlFor="id" className="label">ID</label>
					<p className="value">{user.id}</p>
				</div>
				<Link to="/my-account/update" className="secondary-button login-button">Update</Link>
			</div>
		</div>
	);
}

export default MyAccount;
