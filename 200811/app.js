const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const usersRouter = require("./router/users");
// const booksRouter = require("./router/books");
app.use(morgan("dev"));
// all err
app.use((req, res, next) => {
  if (!req.userName) return next(createError(401));
});
app.use("/users", usersRouter);
// app.use("/books", booksRouter);
app.use("/admin", (req, res, next) => {
  if (!req.user) next(createError(401, "Please login to view this page."));
  next();
});
app
  .get("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This was GET req" });
    //res.end();
  })
  .post("/", (req, res) => {
    console.log("POST");
    res.status(200).json({ text: "This was POST" });
  })
  .delete("/", (req, res) => {
    console.log("POST");
    res.status(200).json({ text: "This was DELETE" });
  })
  .put("/", (req, res) => {
    console.log("POST");
    res.status(200).json({ text: "This was PUT" });
  });

// app.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.status = 404;
//   next(error);
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// /bill error
app.post("/bill", (req, res, next) => {
  next(
    createError(402, `You don't have mony`, {
      detail: {
        yourBalance: 400,
        itemCost: 6000,
      },
    })
  );
});

module.exports = app;