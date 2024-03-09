import CourseController from "./controllers/CourseController.js";

import { Router } from "express";

const routes = Router();

routes.get("/courses", CourseController.index);
routes.get("/courses/:id", CourseController.show);
routes.post("/courses", CourseController.store);
routes.put("/courses/:id", CourseController.update);
routes.delete("/courses/:id", CourseController.delete);

export default routes;
