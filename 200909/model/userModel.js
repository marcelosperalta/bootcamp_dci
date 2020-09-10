// Authentication part one
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  userName: {
    type: String,
    required: "You have to provide a username",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "You have to provide a password",
    trim: true,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
