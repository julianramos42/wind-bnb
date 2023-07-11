import React from 'react'
import './navBar.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import navActions from '../../store/navState/actions'
import { useState } from 'react'
import staysActions from '../../store/stays/actions'
import data from '../../data.json'

const { allStays } = staysActions
const { renderNav } = navActions

export default function NavBar() {
    let btnLocation = useRef()
    let btnGuests = useRef()
    let locations = useRef()
    let stays = data
    let uniqueStays = [...new Set(stays.map(stay => stay.city))]
    let [locationValue, setLocationValue] = useState('')
    let filteredStays = uniqueStays.filter(uniqueStay => uniqueStay.toLowerCase().includes(locationValue.toLowerCase()))
    let dispatch = useDispatch()

    let searchedStays = stays.filter(stay => stay.city === locationValue)
    function search() {
        if (searchedStays.length) {
            dispatch(allStays({ stays: searchedStays, filter: true }))
            dispatch(renderNav({ state: false }))
        }
    }

    function selectBtn(e) {
        if (e.target.id === 'location') {
            btnLocation.current.className = 'btnSelected'
            locations.current.classList.add('show')
            btnGuests.current.className = ''
        } else if (e.target.id === 'guests') {
            btnGuests.current.className = 'btnSelected'
            btnLocation.current.className = ''
            locations.current.classList.remove('show')
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
                        <input type='text' ref={btnLocation} onChange={filterStays} name='location' id='location' placeholder='Add Location' />
                    </div>
                    <div className='column'></div>
                    <div className='inputContainer' id='guests' onClick={selectBtn}>
                        <p id='guests'>GUESTS</p>
                        <input type='text' ref={btnGuests} name='guests' id='guests' placeholder='Add Guests' />
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
            </nav>
        </div>
    )
}