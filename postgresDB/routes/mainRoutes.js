const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController')

// ROUTES
router.get("/", mainController.home);

router.get("/planets", mainController.getPlanets);

router.get("/planets/:id", mainController.getPlanetById);

router.get("/error", mainController.error);

router.post("/planets", mainController.createPlanet);

router.put("/planets/:id", mainController.editPlanet) 

// continuar con la ruta del DELETE

router.delete("/planets/:id", mainController.deletePlanet)



module.exports = router;
