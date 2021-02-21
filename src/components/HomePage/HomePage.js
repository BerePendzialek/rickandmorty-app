import './HomePage.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

export default function HomePage({ title, hidden }) {
  const [characters, setCharacters] = useState([])
  const [data, setData] = useState(characters)

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next
        nextUrl && getAllCharacters(nextUrl)
      })
  }

  function filterRandom(characters) {
    const randomNumber = Math.floor(Math.random() * characters.length)
    return setData([characters[randomNumber - 1]])
  }

  return (
    <section className="HomePage" hidden={hidden}>
      <h2>{title}</h2>

      <button onClick={() => filterRandom(characters)}>Random!</button>

      {data.map(({ name, id, status, species, image, origin, location }) => (
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
