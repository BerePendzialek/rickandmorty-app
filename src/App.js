import React, { useState, useEffect } from 'react'
import './App.css'

import WikiPage from './components/WikiPage/WikiPage'
import PlayPage from './components/PlayPage/PlayPage'
import HomePage from './components/HomePage/HomePage'
import Navigation from './components/Navigation/Navigation'
import AppHeader from './components/AppHeader/AppHeader'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <AppHeader title="R-and-M App" />

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
