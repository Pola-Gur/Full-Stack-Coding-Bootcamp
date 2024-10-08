import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import ComponentuseEffect from './components/ComponentuseEffect'
import './App.css';

function App() {
  return (
    <>
      <Greeting name={"John"}/>
      <Counter incrementOnly />  
      <Counter decrementOnly /> 
      <UserCard/>
      <UserCard name="Some_name" age={100}/>
      <ComponentuseEffect/>
    </>
  );
}

export default App;


