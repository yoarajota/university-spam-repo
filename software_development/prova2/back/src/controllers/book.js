import index from "../cases/books/index.js";
import edit from "../cases/books/edit.js";
import del from "../cases/books/del.js";
import create from "../cases/books/create.js";
import show from "../cases/books/show.js";

const BookController = { index, create, edit, del, show };
export default BookController;