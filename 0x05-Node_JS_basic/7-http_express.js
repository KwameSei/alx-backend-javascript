const express = require('express');
const data = require('./3-read_file_async');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

const countStudents = data; // (doc) => { ... };
const databaseFile = process.argv[2]; // 'database.csv';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then((result) => {
      res.send(`This is the list of our students\n\n${result}`);
    })
    .catch((error) => {
      console.log(error);
      res.send(`This is the list of our students\n\n${error.message}`);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
