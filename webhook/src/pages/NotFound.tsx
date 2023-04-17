import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/notFound.css'

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="heading">404</h1>
            <p className="subheading">Oops! The page you are looking for cannot be found.</p>
            <Link to="/" className="button">Back to Home</Link>
        </div>
    );
}

export default NotFound;