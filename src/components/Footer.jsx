/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
return (
    <>
    <footer>
        <div className='footer_nav' >
        <div className="footer-logo">
            <h3>Shortly</h3>
        </div>
            <div className='footer-links'>
            <div>
                <h4>Features</h4>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </div>

            <div>
                <h4>Resources</h4>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </div>

            <div>
                <h4>Company</h4>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </div>
            </div>
            
            <div className='social-media'>
                <img src='../src/assets/images/icon-facebook.svg'/>
                <img src='../src/assets/images/icon-twitter.svg'/>
                <img src='../src/assets/images/icon-pinterest.svg'/>
                <img src='../src/assets/images/icon-instagram.svg'/>
            </div>
        </div>
    </footer>
    </>
)
}

export default Footer;