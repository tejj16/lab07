var express = require('express');
var router = express.Router();

// Default Home Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express App' });
});

module.exports = router;
