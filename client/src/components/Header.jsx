import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '@styles/sizes.scss';
import '@styles/Header.scss';

import logo from '@images/default.png';

function ResponsiveAppBar() {
	return (
		<nav className="navbar">
			<Link to="/" className="brand"><img src={logo} alt="iCompare logo" className='h-96 w-96' /></Link>
			<ul className="nav-list">
				<li className="nav-item"><Link to="/docs">Documentation</Link></li>
				<li className="nav-item"><Link to="/sign-in">Sign in</Link></li>
			</ul>
		</nav>
	);
}
export default ResponsiveAppBar;