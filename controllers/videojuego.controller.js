const db = require("../models");
const Videojuego = db.videojuego;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Videojuego.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving videojuegos."
      });
    });
};