import { Router } from "express";
import MoviesController from "./controllers/MoviesController";

const routes = Router();

// Auth
routes.get("/movies", MoviesController.index);
routes.post("/movies/create", MoviesController.create);
routes.put("/movies/update", MoviesController.update);
routes.delete("/movies/delete", MoviesController.delete);

export default routes;
