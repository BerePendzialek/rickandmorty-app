import './WikiPage.css'
import React, { useState, useEffect } from 'react'
import { results } from '../../rickandmortyapi.json'
import Card from '../Card/Card'

export default function WikiPage({ title, hidden }) {
  //const [characters, setCharacters] = useState([])

  // useEffect(() => {
  //   getAllCharacters({
  // url: 'https://rickandmortyapi.com/api/character', setCharacters,
  //})
  // }, [])

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
