import React, { useState } from 'react'
import './App.css'

import WikiPage from './components/WikiPage/WikiPage'
import PlayPage from './components/PlayPage/PlayPage'
import HomePage from './components/HomePage/HomePage'
import Navigation from './components/Navigation/Navigation'
import AppHeader from './components/AppHeader/AppHeader'
import Grid from './components/Grid/Grid'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <Grid>
      <AppHeader title="Wubba Lubba Dub Dub!" />

      <div className="App">
        <HomePage
          hidden={currentPage !== 'home'}
          title="- Your daily character -"
        />
        <WikiPage
          hidden={currentPage !== 'wiki'}
          title="- Character search -"
        />
        <PlayPage hidden={currentPage !== 'play'} title="Play" />
      </div>

      <Navigation onNavigate={setCurrentPage} />
    </Grid>
  )
}

export default App
