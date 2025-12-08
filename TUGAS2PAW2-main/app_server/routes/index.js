var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

// get about page
router.get('/about', mainController.about);

// get contact page
router.get('/contact', mainController.contact);

// get prodi page
router.get('/prodi', mainController.prodi);

module.exports = router;
