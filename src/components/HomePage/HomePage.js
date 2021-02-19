import './HomePage.css'
import React from 'react'
import { results } from '../../rickandmortyapi.json'
import Card from '../Card/Card'

export default function HomePage({ title, hidden }) {
  function getRandom(max) {
    return Math.floor(Math.random() + (max + 1))
  }

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
