const planets = require("../data/planets");
const Joi = require("joi");

const planetSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().alphanum(),
});

const mainController = {
  home: (req, res) => {
    res.status(200).send("Hello, World!");
  },
  getPlanets: (req, res) => {
    res.status(200).json(planets);
  },
  getPlanetById: (req, res) => {
    const { id } = req.params;
    // const requestedPlanet = planets.filter(planet => {
    //   return planet.id === Number(id);
    // })
    const requestedPlanet = planets.find((planet) => planet.id === Number(id));
    res.json(requestedPlanet);
  },
  error: async (req, res) => {
    throw new Error("async error!");
  },
  createPlanet: (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    const id = planets.length + 1;
    const newPlanet = { id: id, name: name };

    const validation = planetSchema.validate(newPlanet);
    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }
    planets = [...planets, newPlanet]
    // res.status(201).json({ msg: "success!" });
    res.status(201).json(planets);
  },
  editPlanet: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const changePlanet = planets.find((planet) => planet.id === Number(id));
    changePlanet.name = name;

    res.status(200).json({ changePlanet, planets });
    // res.status(200).json({ msg: "success!" });
  },
  deletePlanet: (req, res) => {
    const { id } = req.params;
    const deletePlanetArray = planets.filter(
      (planet) => planet.id != Number(id)
    );

    res.status(200).json(deletePlanetArray);
  },
};

module.exports = mainController;
