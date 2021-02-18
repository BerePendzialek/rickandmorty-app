import './HomePage.css'
import React from 'react'

export default function HomePage({ title, hidden }) {
  return (
    <section className="HomePage" hidden={hidden}>
      <h1>{title}</h1>
    </section>
  )
}
