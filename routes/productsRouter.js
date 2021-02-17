var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/detail/:id/:category', productsController.detail);

module.exports = router