/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route } from 'react-router-dom' 
import Features from '../Pages/Features';
import Pricing from '../Pages/Pricing';
import Resources from '../Pages/Resources';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import PasswordRecovery from '../Pages/PasswordRecovery';

function Links() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/passwordrecovery' element={<PasswordRecovery/>}/>
      </Routes>
    </>
  )
}

export default Links;