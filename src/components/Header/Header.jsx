import React from 'react'
import './header.css'
import logo from '../../images/logo.png'
import NavBar from '../NavBar/NavBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import navActions from '../../store/navState/actions'
import staysActions from '../../store/stays/actions'
import data from '../../data.json'

const { allStays } = staysActions
const { renderNav } = navActions

export default function Header() {
  let navRender = useSelector(store => store.navReducer.state)
  let dispatch = useDispatch()

  function openNav() {
    dispatch(renderNav({ state: true }))
  }

  let stays = useSelector(store => store.staysReducer.stays)
  let staysFilter = useSelector(store => store.staysReducer.filter)
  console.log(staysFilter)

  function clearFilters() {
    dispatch(allStays({ stays: data, filter: false }))
  }

  return (
    <header>
      {
        navRender ? <NavBar /> : <><img src={logo} alt='logo' />
          <div className='buttons-containers'>
            <div className='search' onClick={openNav}>
              {
                staysFilter ? <input type='text' name='location' placeholder='Add Location' value={stays[0].city} /> : <input type='text' name='location' placeholder='Add Location' value='' />
              }
              <input type='text' name='guests' placeholder='Add Guests' />
              <i className="fa-solid fa-magnifying-glass loupe"></i>
            </div>
            {
              staysFilter ? <div className='clear-filter' onClick={clearFilters}>
                <i className="fa-solid fa-rotate-right fa-flip-horizontal"></i>
                <p>Clear Filters</p>
              </div> : <></>
            }
          </div></>
      }
    </header>
  )
}