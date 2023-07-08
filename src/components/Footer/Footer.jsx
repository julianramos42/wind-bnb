import React from 'react'
import './footer.css'
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <p>created by <Anchor className='anchor' to='https://github.com/julianramos42' target='_blank'>Julián Ramos</Anchor> & <Anchor className='anchor' to='https://github.com/ivann-bravo' target='_blank'>Iván Bravo</Anchor></p>
    </footer>
  )
}