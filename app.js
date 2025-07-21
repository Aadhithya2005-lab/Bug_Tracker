// app.js (Node backend)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let bugs = [];

app.use(bodyParser.json());
app.use(express.static('.'));

app.get('/bugs', (req, res) => {
  res.json(bugs);
});

app.post('/bugs', (req, res) => {
  const { title, description } = req.body;
  const bug = { id: Date.now(), title, description };
  bugs.push(bug);
  res.status(201).json(bug);
});

app.listen(PORT, () => {
  console.log(`Bug Tracker app listening at http://localhost:${PORT}`);
});
