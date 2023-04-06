import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '@styles/sizes.scss';
import '@styles/Footer.scss';

import logo from '@logos/iTools.icon.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="brand-container">
                <Link to="/" className="brand">
                    <img src={logo} alt="iTools logo" className="h-96 w-96" />
                </Link>
            </div>

            <ul className="footer-list">
                <li className="footer-item">
                    <Link to="/contact">Contact me</Link>
                </li>
                <li className="footer-item">
                    <Link to="/docs">Terms and conditions</Link>
                </li>
                <li className="footer-item">
                    <Link to="/docs">Privacy policy</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;