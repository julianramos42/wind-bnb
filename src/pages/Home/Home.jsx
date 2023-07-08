import React from 'react'
import './home.css'
import Card from '../../components/Card/Card'
import data from '../../data.json'

export default function Home() {

    return (
        <main className='mainContainer'>
            <div className='placesContainer'>
                {
                    data.map((place, i) => {
                        return <Card place={place} key={i} />
                    })
                }
            </div>
        </main>
    )
}