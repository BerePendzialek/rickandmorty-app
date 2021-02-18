import './WikiPage.css'
import React from 'react'
import { results } from './rickandmortyapi.json'
import Card from './Card'

export default function WikiPage({ title, hidden }) {
  return (
    <>
      <section className="WikiPage" hidden={hidden}>
        <h1>{title}</h1>

        {results.map(
          ({ name, id, status, species, image, origin, location }) => (
            <Card
              key={id}
              name={name}
              status={status}
              species={species}
              image={image}
              origin={origin.name}
              location={location.name}
            />
          )
        )}
      </section>
    </>
  )
}
