// npm i express
// npm i lowdb

// express
const express = require("express");
const app = express();
const port = 3000;
// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// db init (1st step)
// http://localhost:3000/new
app.get("/new", (req, res) => {
  db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db being init");
});

// adding new (2nd step)
// http://localhost:3000/add?id=1&title=I+like+water
// http://localhost:3000/add?id=2&title=I+like+to+sleep
app.get("/add", (req, res) => {
// url   /add?id=1&title=1+like+water
// console.log(req);
  const id = req.query.id;
  const title = req.query.title;
  db.get("articles").push({id: id, title: title}).write();
  res.send(`New data being entered with id = ${id} and title = ${title}`);
});

// look up
// http://localhost:3000/find?id=1
app.get("/find", (req, res) => {
// url   /find?id=1
  const idToFind = req.query.id;
  res.send(db.get("articles").find({ id: idToFind }).value());
});

// update
// http://localhost:3000/update
app.get("/update", (req, res) => {
// url   /update
  db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was increased by one, now num is = ${num}`);
});

// user name
app.get("/user", (req, res) => {
// url   /user?name=Hadi
  const name = req.query.name;
  db.set("user.name", name).write();
  res.send(`Hey ${name}`);
});

// nodemon index.js
app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});

// Post method > url > https://website.com/login
// {
//    "email": "my@mail.com",
//    "pass": "0000000"
// }
//
// app.post("/login", (req, res) => {
// const userName = req.body.email;
// const userPass = req.body.pass;
// });