const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");
const faker = require("faker");
const path = require("path");
const fakeModel = require("./models/user");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  fakeModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      res.render("home", { data: data });
    } else {
      res.render("home", { data: {} });
    }
  });
});
app.post("/", (req, res) => {
  for (let i = 0; i < 10; i++) {
    const fakeData = new fakeModel({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      imageUrl: faker.image.imageUrl(),
    });
    try {
      fakeData.save();
    } catch (err) {
      console.log(err);
    }
  }
  res.redirect("/");
});
module.exports = app;
