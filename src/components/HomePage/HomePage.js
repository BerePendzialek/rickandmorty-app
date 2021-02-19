import './HomePage.css'
import React, { useState } from 'react'
import { results } from '../../rickandmortyapi.json'
import Card from '../Card/Card'

export default function HomePage({ title, hidden }) {
  return (
    <section className="HomePage" hidden={hidden}>
      <h1>{title}</h1>

      {results.map(({ name, id, status, species, image, origin, location }) => (
        <Card
          key={id}
          name={name}
          status={status}
          species={species}
          image={image}
          origin={origin.name}
          location={location.name}
        />
      ))}
    </section>
  )
}
