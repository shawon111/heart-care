import { faFacebook, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container">
                <div className="footer-columns row">
                    <div className="footer-col col-sm-4 col-lg-3 border-end border-1 border-light">
                        <h1 className="text-white text-center">HeartCare</h1>
                    </div>
                    <div className="footer-col col-sm-4 col-lg-3 d-flex align-items-center flex-wrap">
                        <div className="footer-menu d-flex">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className="copy-right">
                            <p className="copyright-text text-light">
                                &copy; 2021 MediPlus. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className="footer-col col-sm-4 col-lg-6">
                        <div className="empty-col"></div>
                        <div className="social-info">
                            <div className="social-icons">
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            </div>
                            <div className="email">
                                <p className="text-light">Support: mediplus@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;