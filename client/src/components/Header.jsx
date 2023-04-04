import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';

import '@styles/sizes.scss';
import '@styles/Header.scss';

import logo from '@images/iTools.icon.png';

function ResponsiveAppBar() {
	const { useAuthentication } = useContext(AppContext);
	const { isAuthenticated, logout } = useAuthentication();

	const handleLogout = () => {
		logout();
		return window.location.href = '/';
	};

	return (
		<nav className="navbar">
			<Link to="/" className="brand"><img src={logo} alt="iTools logo" className='h-96 w-96' /></Link>
			<ul className="nav-list">
				{isAuthenticated ? (
					<>
						<li className="nav-item"><Link to="/docs">Documentation</Link></li>
						<li className="nav-item"><button onClick={handleLogout}>Logout</button></li>
					</>
				) : (
					<>
						<li className="nav-item"><Link to="/docs">Documentation</Link></li>
						<li className="nav-item"><Link to="/sign-in">Sign in</Link></li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default ResponsiveAppBar;