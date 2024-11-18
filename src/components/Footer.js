import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <p>&copy; {new Date().getFullYear()} Language Learner. All Rights Reserved.</p>
            <div className='social-icons'>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferer'>
                <i className="fab fa-facebook-f"></i>
                </a>
                <a href='https://x.com/' target='_blank' rel='noopener noreferer'>
                <i className="fab fa-twitter"></i>
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferer'>
                <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;