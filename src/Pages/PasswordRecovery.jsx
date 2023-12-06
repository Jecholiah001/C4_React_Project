/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'

function PasswordRecovery() {
  // State for managing the email input value
const [email, setEmail] = useState('');

  // Function to handle the password recovery button click
const handleRecovery = () => {
    // Implement password recovery logic here (e.g., send recovery email)
    console.log('Recovering password for:', email);
};

return (
    <div className='page-container'>
        <div className='page-details'>
        <div className='page-header'>
            <h2>Forgot Password</h2>
            <p className='page-para'>Enter the email address you used when you joined and we'll send you instructions to reset your password</p>
        </div>
    <form>
        <div className= 'user-input'>
        <label>
            Email<br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        </div>
        <br/><br/>

        <button className='page-btn' type="button" onClick={handleRecovery}>
            Send recovery code
        </button>
    </form>
    
    <div className='password'>
        <Link to={'/login'}>Back to sign in</Link>
    </div>
    </div>
    <div className='login-image'></div>
    </div>
)
}

export default PasswordRecovery;