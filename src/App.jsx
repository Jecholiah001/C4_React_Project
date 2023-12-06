/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import Links from './components/Links'

function App() {
  return (
    <>
      <BrowserRouter>
        <Links/>
      </BrowserRouter>
    </>
  )
}

export default App
