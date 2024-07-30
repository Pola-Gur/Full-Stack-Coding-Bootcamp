const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home page');
  });
  
 router.get('/about', (req, res) => {
    res.send('About us');
  });

 router.get('/contacts', (req, res) => {
    res.send('Contacts');
  });

  module.exports = router;