const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("<h1>Found the page</h1>");
});

server.listen(5000);
