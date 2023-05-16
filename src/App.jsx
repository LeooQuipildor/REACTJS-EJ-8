import { useState } from 'react'
import Titulo from './components/Titulo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo></Titulo>
    </>
  )
}

export default App
