var express = require('express');
var router = express.Router();

const videojuegoController = require("../controllers/videojuego.controller.js");

/* GET videojuegos listing. */
router.get('/', videojuegoController.findAll);

module.exports = router;