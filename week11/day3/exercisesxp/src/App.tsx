import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <>
      <Greeting name={"John"}/>
      <Counter incrementOnly />  {/* Этот счетчик только увеличивает значение */}
      <Counter decrementOnly />  {/* Этот счетчик только уменьшает значение */}
    </>
  );
}

export default App;


