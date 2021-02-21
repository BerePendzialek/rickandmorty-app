import './HomePage.css'
import React, { useState } from 'react'
import { results } from '../../rickandmortyapi.json'
import Card from '../Card/Card'
//import filterRandom from '../../services/filterRandom'

export default function HomePage({ title, hidden }) {
  //const [randomCharacter, setRandomCharacter] = useState()

  //<button onClick={setRandomCharacter()}>Random!</button>

  return (
    <section className="HomePage" hidden={hidden}>
      <h1>{title}</h1>

      <button>Random!</button>

      {results
        //.filter((character, index) => randomCharacter === index)
        .map(({ name, id, status, species, image, origin, location }) => (
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
