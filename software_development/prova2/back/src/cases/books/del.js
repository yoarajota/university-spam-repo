import { defaultResponse } from "../../helpers/index.js";
import Book from "../../models/Book.js";

// Function to delete a book;
const del = async (req, res) => {
  console.log("❗ Called del function.");

  try {
    await Book.findByIdAndDelete(req.params.id);
    return defaultResponse(res).json({
      message: "Book deleted successfully",
    });
  } catch (error) {}
  return defaultResponse(res).status(400).json({
    message: "Book deleted successfully",
  });
};

export default del;
