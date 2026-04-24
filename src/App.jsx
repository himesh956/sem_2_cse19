import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counterapp from './components/Counterapp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Counterapp />
  )
}

export default App
