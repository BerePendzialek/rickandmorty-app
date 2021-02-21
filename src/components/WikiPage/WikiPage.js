import './WikiPage.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

export default function WikiPage({ hidden }) {
  const [characters, setCharacters] = useState([])
  const [userInput, setUserInput] = useState('A')

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

  return (
    <>
      <section className="WikiPage" hidden={hidden}>
        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="Filter name"
        />

        {characters
          .filter(character =>
            character.name.toLowerCase().includes(userInput.toLocaleLowerCase())
          )
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
    </>
  )
}
