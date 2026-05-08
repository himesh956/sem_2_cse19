import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    < Card name="deepak" class='10 class' img='https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg'/>
    < Card name="dev" class='11 class' img='https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80'/>
    < Card name="krishna" class='12  class' img='https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg' />
    <Counter />
   </div>
  )
}

export default App
