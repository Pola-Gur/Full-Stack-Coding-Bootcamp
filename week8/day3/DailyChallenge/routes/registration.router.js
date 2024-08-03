const express = require("express");
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('...');
  });

router.post('/login', (req, res) => {
  res.send('...');
});

router.get('/users', (req, res) => {
  res.send('...');
});

router.get('/users/:id', (req, res) => {
  res.send('...');
});

router.put('/users/:id', (req, res) => {
  res.send('...');
});



// "Username already exists"
// Hello! Your account is now created!

// in Login
// `Hi ${username} welcome back again!`
// Username is not registrated




// Implement the following routes using express.Router:

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).



Use bcrypt to hash user passwords before storing them in the JSON file and for verifying passwords during login.


6. Implement error handling for file read/write operations, route validation, and incorrect login credentials.


module.exports = router;