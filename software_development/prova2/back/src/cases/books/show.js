import { defaultResponse } from "../../helpers/index.js";
import Book from "../../models/Book.js";

// Function to show a book
const show = async (req, res) => {
  try {
    return defaultResponse(res).json(await Book.findById(req.params.id));
  } catch (error) {}
};

export default show;
