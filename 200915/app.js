const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// cookie, session and validator
const expressValidation = require("express-validator");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// hbs
const path = require("path");
const hbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidation());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.raw());
// mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

app.use(express.json());
app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
  })
);
app.use("/uploads", express.static("uploads"));
const auth = require("./routes/auth");
app.use("/", auth);
const users = require("./routes/users");
app.use("/users", users);
const user = require("./routes/user");
app.use("/user", user);
module.exports = app;
