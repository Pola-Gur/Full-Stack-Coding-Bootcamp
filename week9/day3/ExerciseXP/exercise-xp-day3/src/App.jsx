import React, { Component } from 'react';
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';


// export default class BuggyCountert extends React.Component = () => {
//   const [counter, setCount] = useState(0)
  

//   handleClick = () => {

//   }

//   render() {
//     return (
//       <>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </>
//     )
//   }
// }



function App() {
  return (
    <>
    <ErrorBoundary fallback={<p>I crashed!</p>}>
      <Counter/>
      </ErrorBoundary>
    </>
  )
}

export default App;
