import React, { useState, useEffect } from 'react'
import './App.css'

import WikiPage from './WikiPage'
import PlayPage from './PlayPage'
import HomePage from './HomePage'
import Navigation from './Navigation'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState('home')

  // useEffect(() => {
  //   getAllCharacters() // no url provided, so the default parameter is used
  // }, [])

  return (
    <>
      <HomePage />

      <div className="App">
        <HomePage hidden={currentPage !== 'home'} title="Home" />
        <WikiPage hidden={currentPage !== 'wiki'} title="Wiki" />
        <PlayPage hidden={currentPage !== 'play'} title="Play" />
        <Navigation onNavigate={setCurrentPage} />
      </div>
    </>
  )
}

export default App
