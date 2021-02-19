import './PlayPage.css'
import React from 'react'

export default function PlayPage({ title, hidden }) {
  function getRandom(max) {
    return Math.floor(Math.random() + (max + 1))
  }

  return (
    <section className="PlayPage" hidden={hidden}>
      <h1>{title}</h1>

      <button>Random Character</button>
    </section>
  )
}
