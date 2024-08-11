import { useState } from 'react'
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Example1 Component</h2>
      <Example1/>
      <h2>Example2 Component</h2>
      <Example2/>
      <h2>Example3 Component</h2>
      <Example3/>
    </>
  )
}

export default App
