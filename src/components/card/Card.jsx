import React from 'react'
import './card.css'

export default function Card({ place }) {
  return (
    <div className='cardContainer'>
      <img src={place.photo} alt={place.title} className='placeImg' />
      <div className='placeText'>
        <div className='placeInfo'>
          <div>
            {
              place.superHost ? <p className='superHost'>SUPER HOST</p> : <></>
            }
            <p className='placeType'>{place.type}</p>
          </div>
          <p className='placeRating'><i class="fa-solid fa-star star"></i> {place.rating}</p>
        </div>
        <h3 className='placeTitle'>{place.title}</h3>
      </div>
    </div>
  )
}
