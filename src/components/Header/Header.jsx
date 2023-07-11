import React from 'react'
import './header.css'
import logo from '../../images/logo.png'
import NavBar from '../NavBar/NavBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import navActions from '../../store/navState/actions'

const { renderNav } = navActions

export default function Header() {
  let navRender = useSelector(store => store.navReducer.state)
  let dispatch = useDispatch()

  function openNav(){
    dispatch(renderNav({state:true}))
  }

  let stays = useSelector(store => store.staysReducer.stays)
  let staysFilter = useSelector(store => store.staysReducer.filter)

  return (
    <header>
      {
        navRender ? <NavBar/> : <><img src={logo} alt='logo'/>
        <div className='search' onClick={openNav}>
            {
              staysFilter ? <input type='text' name='location' placeholder='Add Location' value={stays[0].city}/> : <input type='text' name='location' placeholder='Add Location'/>
            }
            <input type='text' name='guests' placeholder='Add Guests'/>
            <i className="fa-solid fa-magnifying-glass loupe"></i>
        </div></>
      }
    </header>
  )
}