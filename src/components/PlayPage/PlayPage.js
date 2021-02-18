import './PlayPage.css'
import React from 'react'

export default function PlayPage({ title, hidden }) {
  return (
    <section className="PlayPage" hidden={hidden}>
      <h1>{title}</h1>
    </section>
  )
}
