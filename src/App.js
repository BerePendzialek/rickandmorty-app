import { results } from './rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
  return (
    <div className="App">
      {results.map(({ name, id, status, species, image, origin, location }) => (
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
    </div>
  )
}

export default App
