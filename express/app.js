const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homePage);
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>about page</h1>");
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(homeStyles);
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.end(homeImage);
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(homeLogic);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Wrong URL navigate to the home page</h1>");
  }
});

server.listen(5000);
