import React from 'react';
import './App.css'


async function dataFromURL() {
  const url = "https://webhook.site/e46bdc1e-a1c5-45a2-840f-f30d50b90ba0";
  const data = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27,
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  const result = await response.json();
  console.log(result); 
}

function App() {
  return (
    <>
      <button onClick={dataFromURL}>
        Press me to post some data
      </button>
    </>
  )
}

export default App
