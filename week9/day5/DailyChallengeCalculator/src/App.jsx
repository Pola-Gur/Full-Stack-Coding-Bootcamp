import { useState } from 'react'
import SumTwoNum from './components/SumTwoNum'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SumTwoNum />
    </>
  )
}

export default App
