import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/NotFound.scss';

const NotFound = () => {
	return (
		<div class="container">
			<h1 class="heading">404</h1>
			<p class="subheading">Oops! The page you are looking for cannot be found.</p>
			<Link to="/" class="button">Back to Home</Link>
		</div>
	);
}

export default NotFound;
