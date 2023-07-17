var express = require('express');
var router = express.Router();
const cars = require('../models/car');

router.get('/', (req, res) => {
  res.render('index', { cars });
});

router.post('/cars', (req, res) => {
  const { make, model } = req.body;
  const newCar = { make, model, fullTank: true };
  cars.push(newCar);
  res.redirect('/');
});

module.exports = router;
