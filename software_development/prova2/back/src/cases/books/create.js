import { defaultResponse } from "../../helpers/index.js";
import Book from "../../models/Book.js";

// Function to create a new book
const create = async (req, res) => {
  try {
    // New model instance
    const book = await Book.create(req.body);
    return defaultResponse(res).json({
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    return defaultResponse(res).status(400).json({
      message: "Error saving the book",
      error: error.message,
    });
  }
};

export default create;
