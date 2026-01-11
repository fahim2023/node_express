const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middlewear");
  res.send("<h1>Hello from express</h1>");
  next();
});
app.listen(3000);
