const def = "/api/v1/";

import BookController from "./controllers/book.js";
import validationMiddleware from "./middleware/book.js";

export default function router(app) {
  app.get(def + "Books", BookController.index);
  app.post(def + "Books", validationMiddleware, BookController.create);
  app.get(def + "Books/:id", BookController.show);
  app.delete(def + "Books/:id", BookController.del);
  app.put(def + "Books/:id", validationMiddleware, BookController.edit);
}
