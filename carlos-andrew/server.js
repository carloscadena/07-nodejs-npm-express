'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);  
})

app.get('/new.html', (request, response) => {
  response.sendFile('new.html', {root: __dirname});
})

app.listen(3000, () => {
  console.log(__dirname);
});