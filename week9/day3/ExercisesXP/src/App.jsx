import { useState } from 'react'
import React from 'react';
import './App.css'
import ErrorBoundary from './ErrorBoundary';


class BuggyCounter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState((state) => {
      return {count: state.count + 1}
    })
  }

  render() {
    // const handleClick = () => {
    //   this.setState((state) => {
    //     return {count: state.count + 1}
    //   })
    // }
    if (this.state.count >5) {
      throw new Error("I crashed!")
    }

    return (
        <button onClick={this.handleClick}>
          count is {this.state.count}
        </button>
    )
  }
}

function App() {

  return (
    <>
      <div className="card">
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
      </div>

    </>
  )
}

// export default BuggyCounter;
export default App


// <button onClick={() => setCount((count) => count + 1)}>
// count is {count}
// </button>
