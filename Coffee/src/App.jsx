import { useState } from 'react'
import './App.css'
import { First } from './First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <First/>
    </>
  )
}

export default App
