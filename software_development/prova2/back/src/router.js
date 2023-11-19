const def = "/api/v1/";

import BookController from "./controllers/book.js";

export default function router(app) {
  app.get(def + "Books", BookController.index);
  app.post(def + "Books", BookController.create);
  app.get(def + "Books/:id", BookController.show);
  app.delete(def + "Books/:id", BookController.del);
  app.put(def + "Books/:id", BookController.edit);
}