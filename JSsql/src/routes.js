import express from "express";
import userController from "./controller/usercontroller.js";
import actorController from "./controller/actorcontroller.js";
import genreController from "./controller/genrecontroller.js";
import directorController from "./controller/directorcontroller.js";
import login from './controller/loginController.js';
const routes = express();
routes.use('/login', login);
routes.use("/user", userController);
routes.use("/ator", actorController);
routes.use("/genero", genreController);
routes.use("diretor", directorController);

export default routes;