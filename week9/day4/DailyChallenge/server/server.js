// Create a GET request to the /api/hello route
// that sends the message “Hello From Express”.

import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello from the server!');
});

app.post('/api/world', (req, res) => {
  const { value } = req.body;
  res.send(`Received value: ${value}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
