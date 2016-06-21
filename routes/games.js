var express = require('express');
var router = express.Router();
var Game = require('../models/Game');

/* GET home page. */
router.get('/', function(req, res, next) {
  Game.getAll(function(games) {
    if (games) {
      res.json(games);
    } else {
      res.status(404).json([]);
    }
  })
});

module.exports = router;
