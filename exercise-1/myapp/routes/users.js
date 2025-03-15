var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Middleware to parse body
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// ✅ GET Route to handle requests to /users
router.get('/', function(req, res) {
    res.send('Users GET request received!');
});

// ✅ POST Route to handle form submissions
router.post('/', function(req, res) {
    console.log('Received Data:', req.body);
    res.send('POST received!');
});

module.exports = router;
