const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  image: String,
  authors: Array,
  link: String,
  description: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;