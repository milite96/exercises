const users = require("../data/users")

const controller = {
  home: (req, res) => {
    res.send("server is working");
  },
  getUsers: (req, res) => {
    res.json(users);
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    const user = users.filter(user => Number(id) === user.id)
    console.log(users);
    res.status(200).json(user)
  }
};

module.exports = controller;
