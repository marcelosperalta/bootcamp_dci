const mongoose = require("mongoose");
// Today population and ref

const Schema = mongoose.Schema;

const authorSchema = Schema({
  _id: Schema.Types.ObjectId,
  authorName: String,
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

const bookSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Book = mongoose.model("Book", bookSchema);
const Author = mongoose.model("Author", authorSchema);

module.exports = { Author, Book };
