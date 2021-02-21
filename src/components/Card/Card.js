import './Card.css'
import React, { useState } from 'react'

export default function Card({
  name,
  status,
  species,
  image,
  origin,
  location,
}) {
  const icon = species === 'Human' ? '🙆🏻' : '👽'
  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <section className="Card">
      <h3>
        {name} {icon}
      </h3>
      <img src={image} alt="" />
      <button onClick={() => setIsTextVisible(!isTextVisible)}>
        {isTextVisible ? 'Hide details' : 'Show details'}
      </button>
      <ul hidden={!isTextVisible}>
        <li> Species: {species}</li>
        <li>Status: {status}</li>
        <li>Origin: {origin}</li>
        <li>Location: {location}</li>
      </ul>
    </section>
  )
}
