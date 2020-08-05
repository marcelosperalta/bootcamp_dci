// npm i express
// npm i lowdb
// https://www.postman.com/downloads/

// express
const express = require("express");
const app = express();

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// root req
// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb");
});

// db init
// http://localhost:3000/new
app.get("/new", async (req, res) => {
  // url: /new
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db being init");
});

// adding new
// http://localhost:3000/add?id=1&title=1+like+water
app.get("/add", async (req, res) => {
  // url: /add?id=1&title=1+like+water
  const id = req.query.id;
  const title = req.query.title;
  await db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered with id = ${id} and title = ${title}`);
});

// look up
// http://localhost:3000/find?id=1
app.get("/find", async (req, res) => {
  // url: /find?id=1
  const idToFind = req.query.id;
  res.send(await db.get("articles").find({ id: idToFind }).value());
});

// update
// http://localhost:3000/update
app.get("/update", async (req, res) => {
  // url: /update
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was increased by one, now num is = ${num}`);
});

// user name
// http://localhost:3000/user?name=Hadi
app.get("/user", async (req, res) => {
  // url: /user?name=Hadi
  const name = req.query.name;
  await db.set("user.name", name).write();
  res.send(`Hey ${name} `);
});

// Post method
// login
// url: http://localhost:3000/login
//  {
//     "userName": "Hadi",
//      "pass":"000callme000"
//  }
app.post("/login", (req, res) => {
  // url: /login
  console.log(req.body);
  const userName = req.body.userName;
  const userPass = req.body.pass;
  if (userName === "Hadi" && userPass === "000callme000") {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(401).send(`invalid username or pass`);
  }
});

// remove
// http://localhost:3000/delete
app.get("/delete", async (req, res) => {

  // to remove article
  // url: /delete?title=something
  //   const title = req.query.title;
  //   await db.get("articles").remove({ title: title }).write();
  //   res.status(200).send(`Your ${title} has been removed `);

  // to remove property
  // url: /delete
  db.unset("user.name").write();
  res.status(200).send("user.name has been removed");

});

// api
// http://localhost:3000/api
app.get("/api", (req, res) => {
  // url: /api
  res.status(200).json({ id: 1, cityName: "Berlin", county: "DE" });
});

// https://nodejs.org/dist/latest-v12.x/docs/api/process.html#process_process_env
const PORT = process.env.PORT || 3000;

// nodemon index.js
app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});