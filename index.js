const express = require('express');
let counterMain = 0;
let counterAbout = 0;

const app = express();

app.get('/', (req, res) => {
  counterMain += 1;
  res.send(`
    <h1>Main page</h1>
    <a href="/about">About</a>
    <p>Просмотры страницы: ${counterMain}</p>
  `);
});

app.get('/about', (req, res) => {
  counterAbout += 1;
  res.send(`
    <h1>Page About</h1>
    <a href="/">Main</a>
    <p>Просмотры страницы: ${counterAbout}</p>
  `);
});

app.listen(5500);