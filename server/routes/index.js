var express = require('express');
const controller = require('../controllers/index.controller');
var router = express.Router();

router.get('/', controller.home); 
router.get('/music', controller.music);

module.exports = router;
