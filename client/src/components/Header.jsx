import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';

import '@styles/sizes.scss';
import '@styles/Header.scss';

import logo from '@logos/iTools.icon.png';

function Header() {
	const { useAuthentication } = useContext(AppContext);
	const { isAuthenticated, logout } = useAuthentication();

	const handleLogout = () => {
		logout();
		return (window.location.href = '/');
	};

	return (
		<nav className="navbar">
			<div className="brand-container">
				<Link to="/" className="brand">
					<img src={logo} alt="iTools logo" className="h-96 w-96" />
				</Link>
			</div>
			<ul className="nav-list nav-static">
				<li className="nav-item">
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li className="nav-item">
					<Link to="/playground">Playground</Link>
				</li>
			</ul>
			<ul className="nav-list">
				<li className="nav-item">
					<Link to="/docs">Documentation</Link>
				</li>
				{isAuthenticated ? (
					<>
						<li className="nav-item">
							<Link to="/my-account">My account</Link>
						</li>
						<li className="nav-item">
							<button onClick={handleLogout}>Logout</button>
						</li>
					</>
				) : (
					<>
						<li className="nav-item">
							<Link to="/sign-in">Sign in</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Header;