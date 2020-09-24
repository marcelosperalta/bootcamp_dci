const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const User = require("./models/userModel");

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
const bcrypt = require("bcrypt");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg .gif .png files are OK"), false);
    }
  },
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
app.post("/register", upload.single("avatar"), async (req, res) => {
  const userCheck = await User.findOne({ userName: req.body.userName });

  if (userCheck) {
    return res.status(400).json({ message: "This name is already been used" });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    console.log(req.file);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      userName: req.body.userName,
      password: hashedPassword,
      role: "USER",
      avatar: req.file.path,
    });
    console.log(newUser);
    newUser.save();
    res.status(201).json({ message: "New user being add" });
  } catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = app;
