import React from 'react'
import './home.css'
import Card from '../../components/Card/Card'
import { useSelector } from 'react-redux'

export default function Home() {
    let stays = useSelector(store => store.staysReducer.stays)
    
    return (
        <main className='mainContainer'>
            <div className='filterInfo'>
                <h3>Stays in Finland</h3>
                <p>12+ stays</p>
            </div>
            <div className='placesContainer'>
                {
                    stays.map((place, i) => {
                        return <Card place={place} key={i} />
                    })
                }
            </div>
        </main>
    )
}