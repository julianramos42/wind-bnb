import React from 'react'
import './home.css'
import Card from '../../components/ItemCard/ItemCard'
import { useSelector } from 'react-redux'

export default function Home() {
    let stays = useSelector(store => store.staysReducer.stays)
    let staysFilter = useSelector(store => store.staysReducer.filter)
    let location = useSelector(store => store.staysReducer.city)

    return (
        <main className='mainContainer'>
            <div className='filterInfo'>
                {
                    staysFilter && location ? <h3>Stays in {stays[0]?.city}, Finland</h3> : <h3>Stays in Finland</h3>
                }
                <p>{stays.length} stays</p>
            </div>
            <div className='placesContainer'>
                {
                    stays.length ? stays.map((place, i) => {
                        return <Card place={place} key={i} />
                    }) : <p>No matches found!</p>
                }
            </div>
        </main>
    )
}