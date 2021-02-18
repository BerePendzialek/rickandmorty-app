import './Navigation.css'

export default function Navigation({ onNavigate }) {
  return (
    <nav className="Navigation">
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('wiki')}>Wiki</button>
      <button onClick={() => onNavigate('play')}>Play</button>
    </nav>
  )
}
