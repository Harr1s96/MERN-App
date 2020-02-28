const express = require('express');
const router = express.Router();
const User = require("../../database/sequelizeMain");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllUsers', (req, res) => {
  User.findAll().then(users => res.json(users))
});


module.exports = router;
