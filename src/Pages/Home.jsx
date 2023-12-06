/* eslint-disable no-unused-vars */
import React from 'react'
import Navigation from '../components/navigation'
import Hero from '../components/Hero'
import Input from '../components/Input'
import Statistics from '../components/Statistics'
import Boost from '../components/Boost'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navigation/>
            <Hero/>
            <Input/>
            <Statistics/>
            <Boost/>
            <Footer/>
        </>
    )
}

export default Home
