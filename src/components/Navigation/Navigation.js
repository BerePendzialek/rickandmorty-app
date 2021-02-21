import './Navigation.css'

//import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
//import wikiSVG from '@fortawesome/fontawesome-free/svgs/solid/chalkboard-teacher.svg'
//import playSVG from '@fortawesome/fontawesome-free/svgs/solid/play-circle.svg'

export default function Navigation({ onNavigate }) {
  return (
    <nav className="Navigation">
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('wiki')}>Wiki</button>
      <button onClick={() => onNavigate('play')}>Play</button>
    </nav>
  )
}
