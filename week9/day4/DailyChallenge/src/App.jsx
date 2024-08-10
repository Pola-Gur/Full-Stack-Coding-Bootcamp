// Create a React App in a client folder. In the App.js file,
// use the componentDidMount() method and async await to fetch the message
// from the /api/hello route, and display it as a header.

import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.error('Error fetching the message:', error);
      }
    }

    fetchMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: inputValue }),
      });
      const result = await response.text();
      setResponseMessage(result);
    } catch (error) {
      console.error('Error posting the message:', error);
    }
  };

  return (
    <>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{responseMessage}</p>
    </>
  );
}

export default App;
