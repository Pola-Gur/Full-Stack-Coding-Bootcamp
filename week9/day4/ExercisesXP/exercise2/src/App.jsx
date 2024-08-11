import { useState } from 'react'
import PostList from './components/PostList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Hi! This is a Title</h2>
      <PostList/>
    </>
  )
}

export default App
