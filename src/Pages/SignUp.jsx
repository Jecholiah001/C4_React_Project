/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function SignUp() {
  // State for managing username, email, and password input values
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  // Function to handle the sign-up button click
const handleSignUp = () => {
    // Implement sign-up logic here (e.g., API call, user creation)
    console.log('Signing up with:', firstname,lastname, email, password);
};

return (
    <div className='page-container'>
        <div><img className='arrow' src='../src/assets/images/arrow_back.svg'/></div>
        <div className='back-btn'><Link to={'/'}>Back</Link></div>
        <div className='page-details'>
        <div className='page-header'>
            <h2>Sign Up</h2>
            <p>Get started with Shortly</p>
        </div>
    <form>
        <div className='name'>
        <label>
            First name<br/>
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </label>
        <br /><br/>
        <label>
            Last name<br/>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </label>
        <br/><br/>
        </div>

        <div className='user-input'>
        <label>
            Email<br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/><br/>
        <label>
            Password<br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/><br/>
        </div>

        <button className='page-btn' type="button" onClick={handleSignUp}>
            Sign Up
        </button>
    </form>
    <div className='account'>
        <p>Already have an account? <Link to={'/login'}>Sign in </Link> </p>
    </div>
    </div>
    <div className='login-image'></div>
    </div>
)
}

export default SignUp;


