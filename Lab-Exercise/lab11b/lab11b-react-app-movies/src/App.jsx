import { useState } from 'react'
import MovieBrowser from './components/MovieBrowser.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( < MovieBrowser />)
}

export default App
