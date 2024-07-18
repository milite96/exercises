const planets = require("../data/planets");
const Joi = require("joi");
const pgPromise = require("pg-promise");

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");
// console.log(db);

async function setupDb() {
  await db.none(` 
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    )
    `);

  await db.none(`INSERT INTO planets (name) VALUES ('earth')`);

  await db.none(`INSERT INTO planets (name) VALUES ('mars')`);

  const planets2 = await db.many(`SELECT * FROM planets`);
  console.log(planets2);
}

setupDb();

const planetSchema = Joi.string().alphanum();

const mainController = {
  home: (req, res) => {
    res.status(200).send("Hello, World!");
  },
  getPlanets: async (req, res) => {
    const planetList = await db.many(`SELECT * FROM planets`);
    res.status(200).json(planetList);
  },
  getPlanetById: async (req, res) => {
    const { id } = req.params;
    // const requestedPlanet = planets.filter(planet => {
    //   return planet.id === Number(id);
    // })
    // const requestedPlanet = await db.oneOrNone(`SELECT * FROM planets WHERE id = $1`, Number(id)) //una manera
    const requestedPlanet = await db.oneOrNone(
      `SELECT * FROM planets WHERE id = ${Number(id)}`
    ); // otra manera
    res.json(requestedPlanet);
  },
  error: async (req, res) => {
    throw new Error("async error!");
  },
  createPlanet: async (req, res) => {
    const { name } = req.body;

    const validation = planetSchema.validate(name);
    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }

    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
    const planetList = await db.many(`SELECT * FROM planets`);
    res.status(201).json(planetList);
  },
  editPlanet: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const validation = planetSchema.validate(name);
    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }

    await db.none(`UPDATE planets SET name = $2 WHERE id = $1`, [
      Number(id),
      name,
    ]);
    const planetList = await db.many(`SELECT * FROM planets`);
    res.status(200).json(planetList);
  },
  deletePlanet: async (req, res) => {
    const { id } = req.params;
    const deletePlanetArray = planets.filter(
      (planet) => planet.id != Number(id)
    );
    await db.none(`DELETE FROM planets WHERE id = $1`, Number(id));
    const planetList = await db.many(`SELECT * FROM planets`);
    res.status(200).json({ msg: "success!", planetList });
  },
};

module.exports = mainController;
