/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../App.css'
import StatsCard from './StatsCard';
import Data from '../data.json'

function Statistics() {
    const[data, setData] = useState ([])
    useEffect(() => {
        setData(Data)
    }, [])
    return (
        <>
        <div className='main-sec'>
            <div className='main-text'>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the 
                web with our advanced statistics dashboard.</p>
            </div>
            <div className='stat-sec'>
                <div className='stat-list'>
                    {
                        data.map((card, id)=> (
                            <div key={id} style={{marginTop: id === 0 ?'0':`${id*3}rem`}}>
                            <StatsCard
                            icon={card.icon}
                            title={card.title}
                            details={card.details}
                            />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Statistics;
