// CORS cross origin resource shearing
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const PORT = process.env.PORT || 3000;
app.use("/topics", router);
// app.use("/books", router);
// app.use("/users", router);

const whitelist = ["http://example1.com", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
// app.get("/", (req, res) => {
//   res.send("Hey I am root page");
// });
// app.get("/products/:id", cors(), function (req, res, next) {
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});

// res.set
app.get("/", (req, res) => {
  // setting for the res
  res.set({
    "Content-Type": "application/xml",
  });

  res.end();
});

// regex expression
app.get(/.*look$/, (req, res) => {
  res.send("I know you");
});
app.get("/users/:userId/books/:bookId", function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});