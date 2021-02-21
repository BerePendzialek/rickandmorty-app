import React from 'react'
import './AppHeader.css'
import '../../styles/global.css'

export default function AppHeader({ title }) {
  return (
    <header className="AppHeader">
      <h1>{title}</h1>
    </header>
  )
}
