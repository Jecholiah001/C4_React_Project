/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Navigation() {

    return (
        <>
        <nav>
        <div className="navleft">
            <div className="logo"></div>

            <div className="navlinks">
                <Link to={'/features'} >Features</Link>
                <Link to={'/pricing'}>Pricing</Link>
                <Link to={'/resources'}>Resources</Link>
            </div>
        </div> 
            <div className="accesslinks">
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'} className="signup-btn">Sign Up</Link>
            </div>
        </nav>
        </>
    )
}

export default Navigation;