import './WikiPage.css'
import React, { useState, useEffect } from 'react'

export default function WikiPage({ hidden }) {
  const [characters, setCharacters] = useState([])

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
        <ul>
          {characters.map(character => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
