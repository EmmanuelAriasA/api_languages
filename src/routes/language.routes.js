//MANEJO DE RUTAS DE LENGUAJES
import { Router } from "express";
import { methods as languageController } from "../controllers/lenguage.controller";

//Manejador de rutas
const router = Router();


//Rutas
router.get("/", languageController.getlenguage);

export default router;