const express = require("express");
const router = express.Router();
const Joi = require("joi");
let planets = require("../data/planets");

const planetSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().alphanum(),
})

// ROUTES
router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/planets", (req, res) => {
  res.status(200).json(planets);
});

router.get("/planets/:id", (req, res) => {
  const { id } = req.params;
  // const requestedPlanet = planets.filter(planet => {
  //   return planet.id === Number(id);
  // })
  const requestedPlanet = planets.find((planet) => planet.id === Number(id));
  res.json(requestedPlanet);
});

router.get("/error", async(req, res) => {
  throw new Error("async error!")
});

router.post("/planets", (req, res) => {
  console.log(req.body);
  const { name } = req.body
  const id  = planets.length+1;
  const newPlanet = { id:id, name:name }

  const validation = planetSchema.validate(newPlanet);
  if (validation.error){
    res.status(400).json(validation.error.details[0].message)
    return
  }
  planets.push(newPlanet);

  // res.status(201).json({ msg: "success!" });
  res.status(201).json(planets);
});

router.put("/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const changePlanet = planets.find((planet) => planet.id === Number(id));
  changePlanet.name = name;

  res.status(200).json({changePlanet, planets});

  // res.status(200).json({ msg: "success!" });
}) 

// continuar con la ruta del DELETE

router.delete("/planets/:id", (req, res) => {
  const { id } = req.params;
  const deletePlanetArray = planets.filter((planet) => planet.id != Number(id));


  res.status(200).json(deletePlanetArray)


})



module.exports = router;
