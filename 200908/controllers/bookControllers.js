const { Author, Book } = require("../model/authorModel");
const mongoose = require("mongoose");
const getAll = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getOneByID = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate(
      "books",
      "title"
    );
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const deleteOneByID = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const addAuthor = async (req, res) => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    authorName: req.body.name,
  });
  try {
    author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
// localhost:3000/:id aka author ID
const addBook = async (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      if (author) {
        const book = new Book({
          _id: new mongoose.Types.ObjectId(),
          title: req.body.title,
          author: req.params.id, // get the _id from the author
        });
        book.save();
        author.books.push(book);
        author.save();
        res.status(201).json(book);
      } else {
        return res.status(404).json({
          message: "Author Not Found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = {
  getAll,
  getOneByID,
  deleteOneByID,
  addAuthor,
  addBook,
  getAllBooks,
};
