const http = require('http');
let counter = 0;

const server = http.createServer((req, res) => {

  if(req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    }),
    res.write(`<h1>Welcome to main page</h1><p>Просмотров: <span data-counter-main>${counter++}</span></p><a href="/about.html">Ссылка на about</a>`);
    res.end();
  } else if(req.url === '/about.html') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.write('<h1>About</h1>');
    res.write(`<p>Просмотров: <span data-counter-about>${counter++}</span></p>`);
    res.write('<a href="/">Ссылка на главную</a>')
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
    }),
    res.write('<h1>Page not found</h1>');
  }
});

const port = 5500;

server.listen(port, () => {
  console.log(`port: ${port}`)
})