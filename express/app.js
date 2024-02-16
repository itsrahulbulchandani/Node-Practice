const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Found the home page</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>about page</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Wrong URL navigate to the home page</h1>");
  }
});

server.listen(5000);
