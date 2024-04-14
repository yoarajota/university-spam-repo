import index from "../cases/movies";
import create from "../cases/movies/create";
import update from "../cases/movies/update";
import deleteF from "../cases/movies/delete";

const MoviesController = { index, create, update, delete: deleteF };

export default MoviesController;
