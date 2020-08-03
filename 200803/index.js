// creating a simple Express server
const express = require("express");
const app = express();
const port = 3000;

// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Hey, I am Home page");
});
// http://localhost:3000/about
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});