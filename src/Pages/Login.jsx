/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Login() {
  // State for managing username and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the login button click
  const handleLogin = () => {
    // Implement login logic here (e.g., API call, authentication)
    console.log('Logging in with:', email, password);
  };

  return (

    <div className='page-container'>
      <div><img className='arrow' src='../src/assets/images/arrow_back.svg'/></div>
      <div className='back-btn'><Link to={'/'}>Back</Link></div>
      <div className='page-details'>
      <div className='page-header'>
        <h2>Login</h2>
        <p>Get started with Shortly</p>
      </div>
      
      <form>
        <div className='user-input'>
        <label>
          Email<br/>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/><br/>
        <label>
          Password<br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/><br/>
        </div>

        <div className='password'>
        <Link to={'/passwordrecovery'}>forgot password?</Link>
        </div>
        <br/>

        <button className='page-btn' type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className='account'>
        <p>Don't have an account yet? <Link to={'/signup'}>Sign Up</Link></p>
      </div>
      </div>
      <div className='login-image'></div>
    </div>
  )
}

export default Login;