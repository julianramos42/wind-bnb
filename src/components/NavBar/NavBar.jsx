import React from 'react'
import './navBar.css'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import navActions from '../../store/navState/actions'
import { useState } from 'react'
import staysActions from '../../store/stays/actions'
import data from '../../data.json'

const { allStays } = staysActions
const { renderNav } = navActions

export default function NavBar() {
    let saveGuests = useSelector(store => store.staysReducer.guests)
    let location = useSelector(store => store.staysReducer.city)

    let btnLocation = useRef()
    let btnGuests = useRef()
    let locations = useRef()
    let guests = useRef()
    let stays = data
    let uniqueStays = [...new Set(stays.map(stay => stay.city))]
    let dispatch = useDispatch()
    let [locationValue, setLocationValue] = useState(location || '')
    let [cantGuests,setCantGuests] = useState(saveGuests || 1)
    let filteredStays = uniqueStays.filter(uniqueStay => uniqueStay.toLowerCase().includes(locationValue.toLowerCase()))
    
    let searchedStays = []
    function search() {
        if(locationValue){
            searchedStays = stays.filter(stay => (stay.city === locationValue && stay.maxGuests>=cantGuests))
        }else{
            searchedStays = stays.filter(stay => stay.maxGuests>=cantGuests)
        }
        dispatch(allStays({ stays: searchedStays, filter: true, guests: cantGuests, city: locationValue }))
        dispatch(renderNav({ state: false }))
    }

    function selectBtn(e) {
        if (e.target.id === 'location') {
            btnLocation.current.className = 'btnSelected'
            locations.current.classList.add('show')
            guests.current.classList.remove('show')
            btnGuests.current.className = ''
        } else if (e.target.id === 'guests') {
            btnGuests.current.className = 'btnSelected'
            btnLocation.current.className = ''
            locations.current.classList.remove('show')
            guests.current.classList.add('show')
        }
    }

    function closeNav(e) {
        if (e.target.className === 'navBarContainer') {
            dispatch(renderNav({ state: false }))
        }
    }

    function selectStay(stay) {
        btnLocation.current.value = stay.target.id
        filterStays(stay.target.id)
        console.log(stay)
    }

    function filterStays(e) {
        if (e.target) {
            setLocationValue(e.target.value)
        } else {
            setLocationValue(e)
        }
    }

    return (
        <div className='navBarContainer' onClick={closeNav}>
            <nav>
                <div className='filterContainer'>
                    <div className='inputContainer' id='location' onClick={selectBtn}>
                        <p id='location'>LOCATION</p>
                        <input type='text' ref={btnLocation} onChange={filterStays} name='location' id='location' placeholder='Add Location' value={locationValue || location}/>
                    </div>
                    <div className='column'></div>
                    <div className='inputContainer' id='guests' onClick={selectBtn}>
                        <p id='guests'>GUESTS</p>
                        <input type='text' ref={btnGuests} name='guests' id='guests' placeholder='Add Guests' value={saveGuests || 1}/>
                    </div>
                    <div className='column'></div>
                    <div className='btnSearch' onClick={search}>
                        <i className="fa-solid fa-magnifying-glass loupe"></i><p>Search</p>
                    </div>
                </div>
                <div className='staysContainer' ref={locations}>
                    {
                        filteredStays.map((stay, i) => {
                            let card = <div key={i} onClick={selectStay} id={stay}><i className="fa-solid fa-location-dot" id={stay}></i><h3 id={stay}>{stay}</h3></div>
                            return card
                        })
                    }
                </div>
                <div className='guestsContainer' ref={guests}>
                    <h5>Guests</h5>
                    <div className='guests-btn'>
                        { cantGuests !== 1 ? <button onClick={() => {setCantGuests(cantGuests-1)}}>-</button> : <></> }
                        <p>{cantGuests}</p>
                        <button onClick={ () => {setCantGuests(cantGuests+1)} }>+</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}