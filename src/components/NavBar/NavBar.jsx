import React from 'react'
import './navBar.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import navActions from '../../store/navState/actions'

const { renderNav } = navActions

export default function NavBar() {
    let btnLocation = useRef()
    let btnGuests = useRef()
    let locations = useRef()
    let stays = useSelector(store => store.staysReducer.stays)
    let uniqueStays = [...new Set(stays.map(stay => stay.city))]

    let dispatch = useDispatch()

    function selectBtn(e) {
        if (e.target.id === 'location') {
            btnLocation.current.className = 'btnSelected'
            locations.current.classList.add('show')
            btnGuests.current.className = ''
        } else if (e.target.id === 'guests') {
            btnGuests.current.className = 'btnSelected'
            btnLocation.current.className = ''
        }
    }

    function closeNav(e) {
        if (e.target.className === 'navBarContainer') {
            dispatch(renderNav({ state: false }))
        }
    }

    return (
        <div className='navBarContainer' onClick={closeNav}>
            <nav>
                <div className='filterContainer'>
                    <div className='inputContainer' id='location' onClick={selectBtn}>
                        <p id='location'>LOCATION</p>
                        <input type='text' ref={btnLocation} name='location' id='location' placeholder='Add Location' />
                    </div>
                    <div className='column'></div>
                    <div className='inputContainer' id='guests' onClick={selectBtn}>
                        <p id='guests'>GUESTS</p>
                        <input type='text' ref={btnGuests} name='guests' id='guests' placeholder='Add Guests' />
                    </div>
                    <div className='column'></div>
                    <div className='btnSearch'>
                        <i className="fa-solid fa-magnifying-glass loupe"></i><p>Search</p>
                    </div>
                </div>
                <div className='staysContainer' ref={locations}>
                    {
                        uniqueStays.map((stay,i) => {
                            let card = <div key={i}><i className="fa-solid fa-location-dot"></i><h3>{stay}, Finland</h3></div>
                            return card
                        })
                    }
                </div>
            </nav>
        </div>
    )
}