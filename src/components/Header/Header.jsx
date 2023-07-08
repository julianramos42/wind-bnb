import React from 'react'
import './header.css'
import logo from '../../images/logo.png'

export default function Header() {
    
  return (
    <header>
        <img src={logo} alt='logo'/>
        <div className='search'>
            <input type='text' name='location' placeholder='Add Location'/>
            <input type='text' name='guests' placeholder='Add Guests'/>
            <i class="fa-solid fa-magnifying-glass loupe"></i>
        </div>
    </header>
  )
}