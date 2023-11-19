import { defaultResponse } from "../../helpers/index.js";
import Book from "../../models/Book.js";

// Function to edit a book
const edit = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    Object.assign(book, req.body);

    book.save();
    return defaultResponse(res).json({
      message: "Book edited successfully",
    });
  } catch (error) {
    return defaultResponse(res).status(400).json({
      message: "Error editing the book",
      error: error.message,
    });
  }
};

export default edit;
