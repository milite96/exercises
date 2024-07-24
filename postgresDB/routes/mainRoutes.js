const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController')
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
})

const upload = multer({ storage: storage });


// ROUTES
router.get("/", mainController.home);

router.get("/planets", mainController.getPlanets);

router.get("/planets/:id", mainController.getPlanetById);

router.get("/error", mainController.error);

router.post("/planets", mainController.createPlanet);

router.post("/planets/:id/image", upload.single('planet-image'), mainController.addPlanetImage)

router.put("/planets/:id", mainController.editPlanet);

router.delete("/planets/:id", mainController.deletePlanet);



module.exports = router;
