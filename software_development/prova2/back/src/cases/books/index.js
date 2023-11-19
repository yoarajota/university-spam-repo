import { defaultResponse } from "../../helpers/index.js";
import Book from "../../models/Book.js";

// Function to query all books;
const index = async (_, res) => {
  try {
    return defaultResponse(res).json(await Book.find());
  } catch (error) {
    console.log("❌ ERROR -" + error);
  }
};

export default index;
